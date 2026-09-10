import { CONSTANTS } from './constants.js'

/**
 * Exposure coefficient Ce per CAN/CSA S6-19 Table 3.9
 */
export function calculateExposureCoefficientCSA(H_p) {
  if (H_p <= 10) return 1.0
  if (H_p <= 16) return 1.1
  if (H_p <= 25) return 1.2
  if (H_p <= 37) return 1.3
  if (H_p <= 54) return 1.4
  if (H_p <= 76) return 1.5
  return 1.6
}

/**
 * Reference and effective wind pressure per CAN/CSA S6-19 Cl.3.10
 * qz = reference hourly wind pressure (Pa), e.g. 480 Pa (Fernie 50-yr)
 * If V is supplied and qz is not specified, qz = 0.5 * rho * V² (with rho = 1.25 kg/m³)
 */
export function calculateWindPressureCSA(input) {
  const { V, Ce = 1.0, Cg = 2.5, rho = CONSTANTS.AIR_DENSITY_CSA || 1.25, qz: inputQz } = input
  const qz = inputQz !== undefined && inputQz > 0 ? inputQz : 0.5 * rho * (V || 0) * (V || 0)
  const q_gust = qz * Ce * Cg
  return { qz, q_gust }
}

export function calculateWindPressureAASHTO(input) {
  const { V, Kz = 1.0, Kzt = 1.0, G = 1.14 } = input
  const qz = 0.613 * Kz * Kzt * G * (V || 0) * (V || 0)
  return { qz, q_gust: qz }
}

/**
 * Projected areas for sign panel, tapered pole, and signal arm
 */
export function calculateProjectedAreas(input) {
  const { B_s, d_s, D_base, D_top, H_p, L_arm = 9.0, D_arm = 250 } = input
  const A_s = B_s * d_s
  const D_avg = (D_base + D_top) / 2
  const A_p = (D_avg / 1000) * H_p
  const A_arm = (D_arm / 1000) * L_arm
  return { A_s, A_p, A_arm, D_avg }
}

/**
 * Unfactored wind forces on sign panel, pole shaft, and signal arm,
 * and service base reactions (normal, transverse, overturning, torsion) per CSA S6-19 Cl.3.10
 */
export function calculateWindForces(input) {
  const {
    qz, // reference wind pressure (Pa)
    Ce = 1.0,
    Cg = 2.5,
    Cd_s = 1.7, // DMS panel drag coeff (Table A3.2.2 Flat element)
    Cd_p = 0.5, // Round pole drag coeff (Table A3.2.2 Round pole)
    Cd_arm = 0.5, // Round signal arm drag coeff
    A_s,
    A_p,
    A_arm = 0,
    H_p,
    h_s,
    e,
    h_arm = 0,
    e_arm = 0
  } = input

  const q_gust = qz * Ce * Cg // effective gust velocity pressure (Pa)

  // Component wind forces (kN)
  const F_sign = (q_gust * Cd_s * A_s) / 1000
  const F_pole = (q_gust * Cd_p * A_p) / 1000
  const F_arm = (q_gust * Cd_arm * A_arm) / 1000

  // Wind shear at base - X (normal to sign face)
  const V_W = F_sign + F_pole + F_arm

  // Overturning moment Mx - wind normal to sign face
  const Mx_W = F_sign * h_s + F_pole * (H_p / 2) + F_arm * h_arm
  const M_W = Mx_W

  // Transverse wind moment My - wind parallel to sign face (sign edge-on)
  const My_W = F_pole * (H_p / 2) + F_arm * h_arm

  // Torsion from sign panel eccentricity
  const T_W = F_sign * e

  return {
    F_sign,
    F_pole,
    F_arm,
    V_W,
    M_W,
    Mx_W,
    My_W,
    T_W,
    q_gust
  }
}

/**
 * Dead and ice loads of pole shaft, signal arm, and sign structure
 */
export function calculateDeadLoads(input) {
  const {
    D_base,
    D_top,
    t,
    H_p,
    W_dms = 6.0,
    W_arm = 10.6,
    e = 5.125,
    e_arm = 4.5,
    gamma_s = CONSTANTS.STEEL_GAMMA || 77,
    t_i = 0,
    gamma_i = CONSTANTS.ICE_GAMMA || 9.0,
    A_s = 0
  } = input

  const d_i = D_base - 2 * t
  const A_base = (Math.PI / 4) * (D_base * D_base - d_i * d_i)
  const d_it = D_top - 2 * t
  const A_top = (Math.PI / 4) * (D_top * D_top - d_it * d_it)
  const A_avg = (A_base + A_top) / 2

  // Pole self weight (kN) = gamma_s * avg_sec_area * H_p
  const W_p = gamma_s * (A_avg / 1e6) * H_p

  // Total dead axial at base (kN)
  const P_D = W_p + W_dms + W_arm

  // Transverse moment from eccentric dead loads (kN·m)
  const My_D = W_dms * e + W_arm * e_arm

  // Ice weight (kN) on pole surface + one sign face
  const W_i = gamma_i * (Math.PI * (D_base / 1000) * (t_i / 1000) * H_p + A_s * (t_i / 1000))
  const P_i = W_i

  return {
    W_p,
    W_dms,
    W_arm,
    P_D,
    My_D,
    W_i,
    P_i,
    A_base,
    A_top,
    A_avg
  }
}

export function calculateIceLoads(input) {
  return calculateDeadLoads(input)
}