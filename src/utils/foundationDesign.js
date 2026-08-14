export function calculateFoundationDesign(input) {
  const { M_f, N_f, V_f, B, D, L_c, q_r = 250, phi_c = 0.65, phi_s = 0.85, f_y = 400, f_c = 30, n_b, A_b, d_v, beta = 0.5 } = input
  
  const e = M_f / N_f
  const kernOK = 6 * e <= D && 6 * e <= B
  
  const P_max = N_f / (B * D) + 6 * M_f / (B * D * D)
  const P_min = N_f / (B * D) - 6 * M_f / (B * D * D)
  const bearingOK = P_max <= q_r
  
  const FOS_sliding = 0.5 * N_f / V_f
  const slidingOK = FOS_sliding >= 1.5
  
  const P_M = N_f / (B * D)
  const P_max_face = P_M + 6 * M_f / (B * D * D)
  const M_face = P_M * B * L_c * L_c / 2 + 0.5 * (P_max_face - P_M) * L_c * B * (2 / 3) * L_c
  
const d = d_v * 1000
  const a = 0.1 * d
  const A_b_total = n_b * A_b
  const M_r = phi_s * n_b * A_b * f_y * (d - a / 2) / 1e6

  const f_cr = 0.4 * Math.sqrt(f_c)
  const V_c = 2.5 * beta * phi_c * f_cr * (B * 1000) * d / 1000
  
  const flexureOK = M_r >= M_face
  const shearOK = V_c >= V_f
  
  return { e, kernOK, P_max, P_min, bearingOK, FOS_sliding, slidingOK, M_face, M_r, V_c, flexureOK, shearOK }
}