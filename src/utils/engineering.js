import {
  calculateWindPressureCSA,
  calculateWindPressureAASHTO,
  calculateWindForces,
  calculateProjectedAreas,
  calculateDeadLoads
} from './windCalculations.js'
import {
  calculateSectionProperties,
  calculateFactoredResistances,
  calculateUtilizations
} from './sectionProperties.js'
import { calculateDeflection, calculateNaturalFrequency } from './serviceability.js'
import { calculateAerodynamics, calculateFlowRegime } from './aerodynamics.js'
import { CONSTANTS } from './constants.js'

export function runFullAnalysis(input, code = 'CSA') {
  const {
    // Pole geometry
    Hpole = 7.37,
    Dbase = 610,
    Dtop = 355,
    t = 12.7,

    // Signal arm geometry & loads
    Larm = 9.0,
    Darm = 250,
    Hsign = input.Hsign ?? 7.1825,
    harm = input.harm ?? Hsign, // horizontal arm centered with the sign
    earm = input.earm ?? (Larm / 2),
    Warm = 10.6,
    Cd_arm = 0.5,

    // Sign structure geometry & loads
    Bsign = 7.75,
    Dsign = 1.525,
    esign = input.esign ?? (1.25 + Bsign / 2),
    Wdms = 6.0,
    Cd_s = 1.7,

    // Wind parameters
    qz: inputQz,
    Vwind = 27.7,
    Ce = 1.0,
    Cg = 2.5,
    Kz = 1.0,
    Kzt = 1.0,
    G = 1.14,
    Cd_p = 0.5,
    theta = 0,

    // Ice & material
    t_i = 0,
    gamma_i = CONSTANTS.ICE_GAMMA || 9.0,
    Fy = CONSTANTS.DEFAULT_FY || 350,
    E = CONSTANTS.STEEL_E || 200000,
    gamma_s = CONSTANTS.STEEL_GAMMA || 77
  } = input

  // 1. Projected Areas
  const { A_s, A_p, A_arm, D_avg } = calculateProjectedAreas({
    B_s: Bsign,
    d_s: Dsign,
    D_base: Dbase,
    D_top: Dtop,
    H_p: Hpole,
    L_arm: Larm,
    D_arm: Darm
  })

  // 2. Wind Pressure
  const windPres = code === 'CSA'
    ? calculateWindPressureCSA({ V: Vwind, Ce, Cg, qz: inputQz })
    : calculateWindPressureAASHTO({ V: Vwind, Kz, Kzt, G })

  const qz = windPres.qz
  const q_gust = windPres.q_gust

  // 3. Wind Forces & Unfactored Service Demands
  const windForces = calculateWindForces({
    qz,
    Ce,
    Cg,
    Cd_s,
    Cd_p,
    Cd_arm,
    A_s,
    A_p,
    A_arm,
    H_p: Hpole,
    h_s: Hsign,
    e: esign,
    h_arm: harm,
    e_arm: earm
  })

  const { F_sign, F_pole, F_arm, V_W, Mx_W, My_W, T_W } = windForces
  const M_W = Mx_W

  // 4. Dead Loads & Ice Loads
  const deadLoads = calculateDeadLoads({
    D_base: Dbase,
    D_top: Dtop,
    t,
    H_p: Hpole,
    W_dms: Wdms,
    W_arm: Warm,
    e: esign,
    e_arm: earm,
    gamma_s,
    t_i,
    gamma_i,
    A_s
  })

  const { W_p, P_D, My_D, W_i, P_i } = deadLoads

  // Transverse moment envelope (CSA S6-19 Cl.3.10 / LTS)
  const thetaRad = ((theta || 0) * Math.PI) / 180
  const My_S = Math.max(
    My_D + My_W,
    Mx_W * Math.tan(thetaRad) + My_D
  )

  // 5. Section Properties at Base (Circular Hollow)
  const section = calculateSectionProperties(Dbase, t)
  const resistances = calculateFactoredResistances(section, Fy)

  // 6. Factored Demands (CSA S6-19 Cl.3 & Cl.12)
  // Combo 1: 1.1D + 1.4W (CSA S6-19) or 1.3W (AASHTO)
  const wFactor = code === 'CSA' ? 1.4 : 1.3
  const Pf1 = 1.1 * P_D
  const Vf1 = wFactor * V_W
  const Mfx1 = wFactor * Mx_W
  const Mfy1 = 1.1 * My_D + wFactor * (My_S - My_D)
  const Tf1 = wFactor * T_W

  // Combo 2: 1.1D + 0.7W + 1.3I
  const Pf2 = 1.1 * P_D + 1.3 * P_i
  const Vf2 = 0.7 * V_W
  const Mfx2 = 0.7 * Mx_W
  const Mfy2 = 1.1 * My_D + 0.7 * (My_S - My_D)
  const Tf2 = 0.7 * T_W

  // Governing Factored Demands
  const Pf = Math.max(Pf1, Pf2)
  const Vf = Math.max(Vf1, Vf2)
  const Mfx = Math.max(Mfx1, Mfx2)
  const Mfy = Math.max(Mfy1, Mfy2)
  const Mf_res = Math.sqrt(Mfx * Mfx + Mfy * Mfy) // Vector resultant moment for circular section
  const Mf = Mf_res
  const Tf = Math.max(Tf1, Tf2)

  // 7. Design Checks & Utilizations
  const utilizations = calculateUtilizations({ Pf, Vf, Mf: Mf_res, Tf }, resistances)

  // 8. Serviceability - Deflection
  const { delta_sign, delta_pole, delta_total, delta_limit, deflOK } = calculateDeflection({
    F_sign,
    F_pole,
    H_p: Hpole,
    h_s: Hsign,
    E,
    I: section.I
  })

  // 9. Aerodynamics & Dynamic Wind
  const m_pole = (section.A * CONSTANTS.STEEL_DENSITY * Hpole) / 1e6
  const m_arm = (Warm * 1000) / CONSTANTS.GRAVITY
  const m_sign = (Wdms * 1000) / CONSTANTS.GRAVITY
  const m_top = m_sign + m_arm
  const { f_n } = calculateNaturalFrequency({
    H_p: Hpole,
    E,
    I: section.I,
    m_DMS: m_top,
    m_pole
  })

  const aero = calculateAerodynamics({
    V: Vwind,
    D_avg: D_avg / 1000,
    f_n,
    m_eff: m_top + 0.24 * m_pole,
    zeta: 0.005
  })
  const regime = calculateFlowRegime(aero.Re)

  const govRow = {
    qz: qz.toFixed(0),
    class: section.Class,
    U: utilizations.U_gov.toFixed(3),
    strengthOK: utilizations.strengthOK ? 'OK' : 'NG',
    delta: delta_total.toFixed(1),
    deltaLimit: delta_limit.toFixed(1),
    deflOK: deflOK ? 'OK' : 'NG'
  }

  return {
    wind: {
      qz,
      q_gust,
      F_sign,
      F_pole,
      F_arm,
      V_W,
      M_W,
      Mx_W,
      My_W,
      My_S,
      T_W,
      A_s,
      A_p,
      A_arm,
      regime
    },
    dead: {
      W_p,
      W_arm: Warm,
      W_dms: Wdms,
      P_D,
      My_D,
      W_i,
      P_i
    },
    section: { ...section, Fy, t, Dbase, Dtop, Darm, Larm },
    resistances,
    demands: {
      Pf,
      Vf,
      Mf: Mf_res,
      Mfx,
      Mfy,
      Mf_res,
      Tf,
      combos: {
        combo1: { Pf: Pf1, Vf: Vf1, Mfx: Mfx1, Mfy: Mfy1, Tf: Tf1 },
        combo2: { Pf: Pf2, Vf: Vf2, Mfx: Mfx2, Mfy: Mfy2, Tf: Tf2 }
      }
    },
    utilizations,
    deflection: { delta_sign, delta_pole, delta_total, delta_limit, deflOK },
    aerodynamics: { ...aero, f_n, regime },
    governing: govRow
  }
}