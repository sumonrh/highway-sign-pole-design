import { CONSTANTS } from './constants.js'

export function calculateWindPressureCSA(input) {
  const { V, Ce, Cg, rho = 1.25 } = input
  const qz = 0.5 * rho * Ce * Cg * V * V
  return qz
}

export function calculateWindPressureAASHTO(input) {
  const { V, Kz, Kzt, G, rho = 1.225 } = input
  const qz = 0.613 * Kz * Kzt * G * V * V
  return qz
}

export function calculateWindForces(input) {
  const { qz, Cd_s, Cd_p, A_s, A_p, H_p, h_s, e } = input
  
  const F_sign = qz * Cd_s * A_s / 1000
  const F_pole = qz * Cd_p * A_p / 1000
  
  const V_W = F_sign + F_pole
  const M_W = F_sign * h_s + F_pole * (H_p / 2)
  const T_W = F_sign * e
  
  return { F_sign, F_pole, V_W, M_W, T_W }
}

export function calculateProjectedAreas(input) {
  const { B_s, d_s, D_base, D_top, H_p } = input
  const A_s = B_s * d_s
  const D_avg = (D_base + D_top) / 2
  const A_p = (D_avg / 1000) * H_p
  return { A_s, A_p, D_avg }
}

export function calculateIceLoads(input) {
  const { D_base, t_i, H_p, A_s, gamma_i, gamma_s, D_top, W_dms, A_top } = input
  const W_i = gamma_i * (Math.PI * (D_base / 1000) * (t_i / 1000) * H_p + A_s * (t_i / 1000))
  const W_p = gamma_s * ((A_s + A_top) / 2) / 1e6 * H_p
  const P_D = W_p + W_dms
  return { W_i, W_p, P_D }
}