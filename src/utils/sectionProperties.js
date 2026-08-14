import { CONSTANTS } from './constants.js'

export function calculateSectionProperties(D, t) {
  const d_i = D - 2 * t
  const A = (Math.PI / 4) * (D * D - d_i * d_i)
  const I = (Math.PI / 64) * (D ** 4 - d_i ** 4)
  const S = I / (D / 2)
  const Z = (D ** 3 - d_i ** 3) / 6
  const r = Math.sqrt(I / A)
  const J = 2 * I
  const Ct = J / (D / 2)
  const Dt_ratio = D / t
  
  let Class
  const Fy = CONSTANTS.DEFAULT_FY
  if (Dt_ratio <= 13000 / Fy) Class = 1
  else if (Dt_ratio <= 18000 / Fy) Class = 2
  else if (Dt_ratio <= 66000 / Fy) Class = 3
  else Class = 4
  
  return { d_i, A, I, S, Z, r, J, Ct, Dt_ratio, Class }
}

export function calculateFactoredResistances(section, Fy = CONSTANTS.DEFAULT_FY) {
  const { Class, Z, S, A, Ct } = section
  const phi = 0.9
  
  const Mr = phi * Fy * (Class <= 2 ? Z : S) / 1e6
  const Pr = phi * A * Fy / 1000
  const Vr = phi * 0.66 * Fy * (0.5 * A) / 1000
  const Tr = phi * 0.66 * Fy * Ct / 1e6
  
  return { Mr, Pr, Vr, Tr }
}

export function calculateUtilizations(demands, resistances) {
  const { Pf, Vf, Mf, Tf } = demands
  const { Pr, Vr, Mr, Tr } = resistances
  
  const u_axial = Pf / Pr
  const u_shear = Vf / Vr
  const u_moment = Mf / Mr
  const u_torsion = Tf / Tr
  
  const u_axial_bending = u_axial + u_moment
  const u_shear_torsion = u_shear + u_torsion
  
  const U_gov = Math.max(u_axial_bending, u_shear_torsion)
  const strengthOK = U_gov <= 1.0
  
  return {
    u_axial, u_shear, u_moment, u_torsion,
    u_axial_bending, u_shear_torsion,
    U_gov, strengthOK
  }
}