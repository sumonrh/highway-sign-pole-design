import { calculateWindPressureCSA, calculateWindPressureAASHTO, calculateWindForces, calculateProjectedAreas } from './windCalculations.js'
import { calculateSectionProperties, calculateFactoredResistances, calculateUtilizations } from './sectionProperties.js'
import { calculateDeflection, calculateNaturalFrequency } from './serviceability.js'
import { calculateAerodynamics, calculateFlowRegime } from './aerodynamics.js'
import { CONSTANTS } from './constants.js'

export function runFullAnalysis(input, code = 'CSA') {
  const {
    Hpole, Hsign, esign, Bsign, Dsign,
    Dbase, Dtop, t,
    Vwind, Ce, Cg, Kz, Kzt, G,
    Cd_s, Cd_p, Wdms,
    t_i, gamma_i,
    Fy = CONSTANTS.DEFAULT_FY,
    E = CONSTANTS.STEEL_E
  } = input

  const { A_s, A_p, D_avg } = calculateProjectedAreas({ B_s: Bsign, d_s: Dsign, D_base: Dbase, D_top: Dtop, H_p: Hpole })

  const qz = code === 'CSA'
    ? calculateWindPressureCSA({ V: Vwind, Ce, Cg })
    : calculateWindPressureAASHTO({ V: Vwind, Kz, Kzt, G })

  const { F_sign, F_pole, V_W, M_W, T_W } = calculateWindForces({
    qz, Cd_s, Cd_p, A_s, A_p, H_p: Hpole, h_s: Hsign, e: esign
  })

  const section = calculateSectionProperties(Dbase, t)
  const resistances = calculateFactoredResistances(section, Fy)

  const poleWeight = section.A / 1e6 * (CONSTANTS.STEEL_DENSITY * CONSTANTS.GRAVITY / 1000) * Hpole
  const D = Wdms + poleWeight
  const W_i = gamma_i * (Math.PI * (Dbase / 1000) * (t_i / 1000) * Hpole + A_s * (t_i / 1000))

  const Pf = Math.max(1.1 * D, 1.1 * D + 1.3 * W_i)
  const Vf = Math.max(1.3 * V_W, 0.7 * V_W)
  const Mf = Math.max(1.3 * M_W, 0.7 * M_W)
  const Tf = Math.max(1.3 * T_W, 0.7 * T_W)

  const utilizations = calculateUtilizations({ Pf, Vf, Mf, Tf }, resistances)

  const { delta_sign, delta_pole, delta_total, delta_limit, deflOK } = calculateDeflection({
    F_sign, F_pole, H_p: Hpole, h_s: Hsign, E, I: section.I
  })

  const m_pole = section.A * CONSTANTS.STEEL_DENSITY * Hpole / 1e6
  const { f_n } = calculateNaturalFrequency({ H_p: Hpole, E, I: section.I, m_DMS: Wdms / CONSTANTS.GRAVITY, m_pole })

  const aero = calculateAerodynamics({ V: Vwind, D_avg: D_avg / 1000, f_n, m_eff: Wdms / CONSTANTS.GRAVITY + 0.24 * m_pole, zeta: 0.005 })
  const regime = calculateFlowRegime(aero.Re)
  
  const govRow = {
    qz: qz.toFixed(0),
    class: section.Class,
    U: utilizations.U_gov.toFixed(2),
    strengthOK: utilizations.strengthOK ? 'OK' : 'NG',
    delta: delta_total.toFixed(1),
    deltaLimit: delta_limit.toFixed(1),
    deflOK: deflOK ? 'OK' : 'NG'
  }
  
  return {
    wind: { qz, F_sign, F_pole, V_W, M_W, T_W, regime },
    section: { ...section, Fy },
    resistances,
    demands: { Pf, Vf, Mf, Tf },
    utilizations,
    deflection: { delta_sign, delta_pole, delta_total, delta_limit, deflOK },
    aerodynamics: { ...aero, f_n, regime },
    governing: govRow
  }
}