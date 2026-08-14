export function calculateDeflection(input) {
  const { F_sign, F_pole, H_p, h_s, E, I } = input
  const a = h_s * 1000
  const L = H_p * 1000

  const delta_sign = (F_sign * 1000) * a * a * (3 * L - a) / (6 * E * I)
  const w = (F_pole * 1000) / L
  const delta_pole = w * L ** 4 / (8 * E * I)
  const delta_total = delta_sign + delta_pole
  const delta_limit = H_p * 1000 / 150

  const deflOK = delta_total <= delta_limit

  return { delta_sign, delta_pole, delta_total, delta_limit, deflOK }
}

export function calculateNaturalFrequency(input) {
  const { H_p, E, I, m_DMS, m_pole } = input
  const k = 3 * E * I / ((H_p * 1000) ** 3) * 1000
  const m_eff = m_DMS + 0.24 * m_pole
  const f_n = (1 / (2 * Math.PI)) * Math.sqrt(k / m_eff)
  return { f_n, k, m_eff }
}