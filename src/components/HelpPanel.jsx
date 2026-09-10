import { useState } from 'react'

function FormulaBlock({ title, rows }) {
  return (
    <div className="help-block">
      <h3>{title}</h3>
      <table className="formula">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td className="fn">{row.name}</td>
              <td className="fx"><code>{row.expr}</code></td>
              <td className="fnote">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function HelpPanel({ onClose, code }) {
  const csa = code === 'CSA'

  const steps = [
    ["1 · Define geometry", "Enter the pole height Hₚ, base/top diameters D, Dₜ, wall thickness t, horizontal signal arm reach L_arm, diameter D_arm, axis height h_arm, arm weight W_arm, and DMS sign panel size Bₛ × dₛ, centroid elevation hₛ, reach e, and weight W_d. These define the full structural frame, wind areas, and dead load eccentricities."],
    ["2 · Wind velocity pressure", csa ? "Determine reference wind pressure qz (from CSA S6-19 Table A3.1.1 or qz = 0.5·ρ·V² with ρ = 1.25 kg/m³), exposure coefficient Ce (Table 3.9), and gust effect coefficient Cg (2.5 for sign poles)." : "Convert the site 3-second gust V into velocity pressure qz using Kz, Kzt and gust G factors (AASHTO LTS Eq 3.8.1-1, SI air 1.225 kg/m³)."],
    ["3 · Wind forces", "Apply gust wind pressure to projected areas with drag coefficients: flat sign panel (Ch = 1.7), round pole shaft (Ch,p = 0.5), and round signal arm (Ch,arm = 0.5) to obtain component forces F_sign, F_pole, and F_arm."],
    ["4 · Dead & ice loads", "Calculate tapered pole self-weight Wp (steel volume × γs from average section), arm weight Warm, and DMS sign weight Wd. Compute permanent transverse bending moment My,D = Wd·e + Warm·e_arm from dead load eccentricities."],
    ["5 · Service demands at base", "Sum base reactions: shear V_W = F_sign + F_pole + F_arm, overturning moment Mx_W = F_sign·hₛ + F_pole·(Hₚ/2) + F_arm·h_arm, transverse moment My_S (envelope of dead eccentricity and parallel wind), and torsion T_W = F_sign·e."],
    ["6 · Factor the load combinations", "Form CSA S6-19 combinations — Combo 1: 1.1D + 1.4W and Combo 2: 1.1D + 0.7W + 1.3I — for axial, shear, biaxial moments (Mfx, Mfy) and torsion. Calculate resultant factored moment Mf_res = √(Mfx² + Mfy²) governing circular sections."],
    ["7 · Section properties at base", "Compute the circular-hollow section properties from D and t: area A, inertia I, elastic/plastic moduli S and Z, torsion constant J and modulus Ct, and the D/t ratio. Classify the section (class 1–4) per CSA S16 to decide whether Z or S governs bending."],
    ["8 · Factored resistances", `Compute φ-factored member resistances: moment Mr, axial (squash) Pr, shear Vr and torsional Tr per ${csa ? 'CSA S16-19' : 'CSA S16-19 / LTS 5'}.`],
    ["9 · Strength checks", "Divide each demand by its resistance to get utilizations, then combine: axial+bending (P/Pr + Mres/Mr) and shear+torsion (V/Vr + T/Tr). The governing utilization U must be ≤ 1.0 (OK), otherwise the section is NG."],
    ["10 · Serviceability (deflection)", "Check the cantilever tip deflection from the sign (point load) plus the pole wind (UDL) against the limit Hₚ/150. Excessive sway also drives the fatigue/vibration behaviour animated in the elevation figure."],
    ["11 · Foundation design (CSA S6-19 & CSA A23.3-19)", "Calculate footing self-weight, neck pier weight, and granular overburden. Check ULS Meyerhof bearing pressure P_max ≤ q_r (factored 250 kPa default), middle-third kern eccentricity 6e ≤ D and 6e ≤ B, sliding stability (FOS ≥ 1.5), and uplift resistance. Compute cantilever bending moment M_face at neck face and one-way shear V_f at d from neck face, checking against CSA A23.3-19 flexural resistance M_r (§10) and shear resistance V_c (§11 simplified)."],
    ["12 · Anchor bolt design (CSA A23.3-19 Annex D)", "Evaluate anchor cage for steel tensile resistance N_sar (Eq. D.2, R=0.75), concrete pullout N_pr (Eq. D.16 for heavy hex head), steel shear V_sar (Eq. D.31), and concrete pryout V_cp (Eq. D.44). Check maximum tension and shear demands under factored pole reactions against combined interaction β_N^(5/3) + β_V^(5/3) ≤ 1.00 (Clause D.7)."]
  ]

  return (
    <section className="help-panel">
      <div className="help-panel-head">
        <div>
          <p className="eyebrow">REFERENCE</p>
          <h2>Formulas & design process</h2>
          <small>Active code basis: {csa ? 'CAN/CSA S6-19 (CHBDC) only — AASHTO LTS excluded' : 'CAN/CSA S6-19 + AASHTO LRFD LTS'} · SI units</small>
        </div>
        <button type="button" className="reset" onClick={onClose}>Close</button>
      </div>

      <div className="help-block help-steps">
        <h3>Design process — step by step</h3>
        <ol className="steps">
          {steps.map(([title, desc], i) => (
            <li key={i}>
              <b>{title}</b>
              <span>{desc}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="help-grid">
        <FormulaBlock title={csa ? 'A · Wind pressure & forces (CAN/CSA S6-19 Cl.3.10)' : 'A · Wind pressure & forces (AASHTO LTS 3.8)'} rows={[
          { name: 'A_sign', expr: 'A_s = B_s · d_s', note: 'Sign panel area (m²)' },
          { name: 'A_arm', expr: 'A_arm = (D_arm/1000) · L_arm', note: 'Projected arm area (m²)' },
          { name: 'A_pole', expr: 'A_p = ((D + D_t)/2)/1000 · H_p', note: 'Projected pole area, avg dia (m²)' },
          csa ? { name: 'qz', expr: 'qz = 0.625 · Ce · Cg · V²  (or from Table A3.1.1)', note: 'CHBDC reference pressure (Pa)' } : { name: 'qz', expr: 'qz = 0.613 · Kz · Kzt · G · V²', note: 'Velocity pressure (Pa), SI air 1.225' },
          { name: 'F_sign', expr: 'F_sign = qz · Ce · Cg · Ch · A_s / 1000', note: 'Wind on sign, Ch=1.7 (kN)' },
          { name: 'F_arm', expr: 'F_arm = qz · Ce · Cg · Ch_arm · A_arm / 1000', note: 'Wind on signal arm, Ch=0.5 (kN)' },
          { name: 'F_pole', expr: 'F_pole = qz · Ce · Cg · Ch_p · A_p / 1000', note: 'Wind on pole shaft, Ch=0.5 (kN)' }
        ]} />
        <FormulaBlock title={csa ? 'B · Dead & ice loads (CHBDC climatic)' : 'B · Dead & ice loads (LTS 3.9 / 3.4)'} rows={[
          { name: 'W_pole', expr: 'W_p = γ_s · ((A_base + A_top)/2)/10⁶ · H_p', note: 'Pole self-weight, avg section (kN)' },
          { name: 'W_arm', expr: 'W_arm', note: 'Signal arm dead load (kN)' },
          { name: 'W_dms', expr: 'W_d', note: 'Sign panel + attachments (kN)' },
          { name: 'P_D', expr: 'P_D = W_p + W_arm + W_d', note: 'Total dead axial at base (kN)' },
          { name: 'My_D', expr: 'My_D = W_d · e + W_arm · e_arm', note: 'Permanent transverse dead moment (kN·m)' }
        ]} />
        <FormulaBlock title='C · Service demands at base' rows={[
          { name: 'V_W', expr: 'V_W = F_sign + F_pole + F_arm', note: 'Total wind shear (kN)' },
          { name: 'Mx_W', expr: 'Mx_W = F_sign·hₛ + F_pole·(Hₚ/2) + F_arm·h_arm', note: 'Overturning moment normal to sign (kN·m)' },
          { name: 'My_W', expr: 'My_W = F_pole·(Hₚ/2) + F_arm·h_arm', note: 'Transverse wind moment, edge-on (kN·m)' },
          { name: 'My_S', expr: 'My_S = max(My_D + My_W, Mx_W·tan(θ) + My_D)', note: 'Governing transverse moment (kN·m)' },
          { name: 'T_W', expr: 'T_W = F_sign · e', note: 'Torsion from sign reach (kN·m)' }
        ]} />
        <FormulaBlock title='D · Factored demands (CSA S6-19)' rows={[
          { name: 'Combo 1', expr: '1.1D + 1.4W → Pf₁ Vf₁ Mfx₁ Mfy₁ Tf₁', note: 'Governing wind ULS (Cl.3)' },
          { name: 'Combo 2', expr: '1.1D + 0.7W + 1.3I → Pf₂ Vf₂ Mfx₂ Mfy₂ Tf₂', note: 'Ice + reduced wind' },
          { name: 'Mf_res', expr: 'Mf_res = √(Mfx² + Mfy²)', note: 'Biaxial resultant moment (kN·m)' },
          { name: 'Governing', expr: 'Pf=max(Pf₁,Pf₂), Vf=max(Vf₁,Vf₂), Tf=max(Tf₁,Tf₂)', note: 'Governing factored demands' }
        ]} />
        <FormulaBlock title='E · Section properties — circular hollow (base)' rows={[
          { name: 'd_i', expr: 'd_i = D − 2t', note: 'Inside diameter (mm)' },
          { name: 'A', expr: 'A = (π/4)·(D² − d_i²)', note: 'Cross-section area (mm²)' },
          { name: 'I', expr: 'I = (π/64)·(D⁴ − d_i⁴)', note: 'Moment of inertia (mm⁴)' },
          { name: 'S', expr: 'S = I / (D/2)', note: 'Elastic section modulus (mm³)' },
          { name: 'Z', expr: 'Z = (D³ − d_i³)/6', note: 'Plastic section modulus (mm³)' },
          { name: 'r', expr: 'r = √(I / A)', note: 'Radius of gyration (mm)' },
          { name: 'J', expr: 'J = 2I', note: 'Torsion constant, round (mm⁴)' },
          { name: 'Ct', expr: 'Ct = J / (D/2)', note: 'Torsion section modulus (mm³)' },
          { name: 'Class', expr: 'D/t ≤ 13000/Fy→1, ≤18000/Fy→2, ≤66000/Fy→3, else 4', note: 'CSA S16 CHS class' }
        ]} />
        <FormulaBlock title={csa ? 'F · Factored resistances (CSA S16-19)' : 'F · Factored resistances (CSA S16-19 / LTS 5)'} rows={[
          { name: 'Mr', expr: 'Mr = φ · Fy · (class≤2 ? Z : S) / 10⁶', note: 'Moment resistance (kN·m)' },
          { name: 'Pr', expr: 'Pr = φ · A · Fy / 1000', note: 'Axial squash resistance (kN)' },
          { name: 'Vr', expr: 'Vr = φ · 0.66·Fy · (0.5A) / 1000', note: 'Shear resistance, CHS (kN)' },
          { name: 'Tr', expr: 'Tr = φ · 0.66·Fy · Ct / 10⁶', note: 'Torsional resistance (kN·m)' }
        ]} />
        <FormulaBlock title='G · Design checks' rows={[
          { name: 'Utilizations', expr: 'P/Pr, M/Mr, V/Vr, T/Tr', note: 'Each ≤ 1' },
          { name: 'Axial+bending', expr: 'U = P/Pr + M/Mr', note: 'S16 13.8 (simplified)' },
          { name: 'Shear+torsion', expr: 'U = V/Vr + T/Tr', note: 'Combined shear' },
          { name: 'Governing', expr: 'U = max(axial+bending, shear+torsion) ≤ 1', note: 'OK if ≤ 1, else NG' }
        ]} />
        <FormulaBlock title='H · Serviceability — tip deflection (SLS)' rows={[
          { name: 'δ_sign', expr: 'δ_s = P·a²·(3L − a) / (6EI)', note: 'Point load at hₛ (P=F_sign, a=hₛ, L=Hₚ)' },
          { name: 'δ_pole', expr: 'δ_p = w·L⁴ / (8EI)', note: 'UDL from pole wind (w=F_pole/Hₚ)' },
          { name: 'δ_total', expr: 'δ = δ_s + δ_p', note: 'Total tip deflection (mm)' },
          { name: 'Limit', expr: 'δ_lim = Hₚ·1000 / n', note: 'OK if δ ≤ δ_lim' }
        ]} />
        <FormulaBlock title='I · Aerodynamics — wind tunnel (VIV & galloping)' rows={[
          { name: 'D_avg', expr: 'D = (D_base + D_top)/2 / 1000', note: 'Average pole diameter (m)' },
          { name: 'f_n', expr: 'f_n = (1/2π)·√(k/m_eff), k = 3EI/L³', note: 'Fundamental frequency, m_eff = m_DMS + 0.24·m_pole (Hz)' },
          { name: 'Re', expr: 'Re = V·D / ν', note: 'Reynolds number → flow regime' },
          { name: 'f_s', expr: 'f_s = St · V / D', note: 'Vortex-shedding frequency at design V (Hz)' },
          { name: 'V_cr', expr: 'V_cr = f_n · D / St', note: 'Lock-in wind speed where f_s = f_n (m/s)' },
          { name: 'U_r', expr: 'U_r = V / (f_n · D)', note: 'Reduced velocity (lock-in near 5–7)' },
          { name: 'Sc', expr: 'Sc = 4π·m_e·ζ / (ρ_a·D²)', note: 'Scruton number; VIV-prone if Sc ≲ 10' },
          { name: 'V_g', expr: 'V_g = 2·Sc·f_n·D / a_g', note: 'Den Hartog galloping onset, a_g ≈ 1 (m/s)' }
        ]} />
        <FormulaBlock title='J · Foundation design (CSA S6-19 / CSA A23.3-19)' rows={[
          { name: 'N_f', expr: 'N_f = 1.2·W_conc + 1.25·W_soil + P_f,pole', note: 'Total factored axial at base (kN)' },
          { name: 'e', expr: 'e = M_f / N_f,  6e ≤ D, B', note: 'Eccentricity & kern check (m)' },
          { name: 'P_max', expr: 'P = N_f/(B·D) ± 6M_f/(B·D²)', note: 'Meyerhof bearing pressure (kPa)' },
          { name: 'Sliding', expr: 'FOS = μ·N_f / V_f ≥ 1.5', note: 'Sliding stability factor of safety' },
          { name: 'M_face', expr: 'M_f = P_M·B·L_c²/2 + ½(P_max−P_M)·L_c·B·(2/3)L_c', note: 'Cantilever moment at neck face (kN·m)' },
          { name: 'M_r', expr: 'M_r = φ_s·n_b·A_b·f_y·(d − a/2) / 10⁶', note: 'Pad flexural resistance, A23.3 §10 (kN·m)' },
          { name: 'V_c', expr: 'V_c = 2.5·β·φ_c·f_cr·b_v·d_v / 1000', note: 'Pad shear resistance, A23.3 §11 (kN)' }
        ]} />
        <FormulaBlock title='K · Anchor bolt design (CSA A23.3-19 Annex D)' rows={[
          { name: 'N_sar', expr: 'N_sar = A_se · f_uta · R / 1000,  R=0.75', note: 'Steel tension resistance, Eq. D.2 (kN)' },
          { name: 'N_pr', expr: 'N_pr = 8 · A_brg · f\'c · λ_a / 1000', note: 'Concrete pullout resistance, Eq. D.16 (kN)' },
          { name: 'V_sar', expr: 'V_sar = 0.6 · A_se · f_uta · R / 1000', note: 'Steel shear resistance, Eq. D.31 (kN)' },
          { name: 'V_cp', expr: 'V_cp = k_cp · N_br', note: 'Concrete pryout resistance, Eq. D.44 (kN)' },
          { name: 'Interaction', expr: 'β_N^(5/3) + β_V^(5/3) ≤ 1.00', note: 'Combined tension & shear, Clause D.7' }
        ]} />
      </div>

      <p className="assumption">
        Symbols: D, D_t = base/top OD; t = wall; Fy = yield; E = modulus; γs, γi = steel/ice unit weight; φ = resistance factor.
        {csa ? 'CSA-only mode replaces the AASHTO LTS velocity-pressure equation with the CHBDC Cl.3.10 form; structural resistances and load combinations already follow CSA S6-19 / S16-19.' : 'Load combinations and resistances follow CSA S6-19 / S16-19; the wind pressure follows AASHTO LTS.'}
        Bending, shear and torsion demands are combined conservatively (simple summation) for preliminary screening — a detailed interaction check per CSA S16 Cl.13/14 should follow. Not for construction.
      </p>
    </section>
  )
}

export default HelpPanel