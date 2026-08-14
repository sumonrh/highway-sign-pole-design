export function calculateAerodynamics(input) {
  const { V, D_avg, f_n, m_eff, zeta, rho_a = 1.225, nu = 1.5e-5 } = input
  
  const Re = V * D_avg / nu
  const St = 0.2
  const f_s = St * V / D_avg
  const V_cr = f_n * D_avg / St
  const U_r = V / (f_n * D_avg)
  const Sc = 4 * Math.PI * m_eff * zeta / (rho_a * D_avg * D_avg)
  
  const vivRisk = Sc < 10 && Math.abs(U_r - 6) < 1.5
  
  const a_g = 1.0
  const V_g = 2 * Sc * f_n * D_avg / a_g
  const galloping = V > V_g
  
  return { Re, f_s, V_cr, U_r, Sc, vivRisk, V_g, galloping }
}

export function calculateFlowRegime(Re) {
  if (Re < 2e5) return 'Subcritical'
  if (Re < 3.5e5) return 'Critical'
  if (Re < 1e6) return 'Supercritical'
  return 'Transcritical'
}