export function calculateAnchorBoltDesign(input) {
  const { N_f, V_f, A_se, f_uta, R = 0.75, A_brg, f_c, lambda_a, N_br, k_cp } = input
  
  const N_sar = A_se * f_uta * R / 1000
  const N_pr = 8 * A_brg * f_c * lambda_a * 1000
  const V_sar = 0.6 * A_se * f_uta * R / 1000
  const V_cp = k_cp * N_br
  
  const beta_N = N_f / Math.min(N_sar, N_pr)
  const beta_V = V_f / Math.min(V_sar, V_cp)
  
  const interaction = Math.pow(beta_N, 5/3) + Math.pow(beta_V, 5/3)
  const interactionOK = interaction <= 1.0
  
  return { N_sar, N_pr, V_sar, V_cp, beta_N, beta_V, interaction, interactionOK }
}