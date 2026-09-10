import { useState } from 'react'

function ResultsPanel({ results, foundation, anchors }) {
  const [tab, setTab] = useState('strength')

  if (!results) return <div className="help-scroll">Enter inputs to see results.</div>

  const fmt = (n, d = 1) => Number(n).toFixed(d)

  const gov = results.governing
  const wind = results.wind
  const section = results.section
  const utilizations = results.utilizations
  const deflection = results.deflection
  const aero = results.aerodynamics

  const strengthRows = [
    { label: 'Axial demand, Pf', value: fmt(results.demands.Pf, 1), unit: 'kN' },
    { label: 'Shear demand, Vf', value: fmt(results.demands.Vf, 1), unit: 'kN' },
    { label: 'Overturning moment, Mfx', value: fmt(results.demands.Mfx, 1), unit: 'kN·m' },
    { label: 'Transverse moment, Mfy', value: fmt(results.demands.Mfy, 1), unit: 'kN·m' },
    { label: 'Resultant moment, Mf,res', value: fmt(results.demands.Mf_res || results.demands.Mf, 1), unit: 'kN·m' },
    { label: 'Torsion demand, Tf', value: fmt(results.demands.Tf, 1), unit: 'kN·m' },
    { label: 'Axial resistance, Pr', value: fmt(results.resistances.Pr, 1), unit: 'kN' },
    { label: 'Shear resistance, Vr', value: fmt(results.resistances.Vr, 1), unit: 'kN' },
    { label: 'Moment resistance, Mr', value: fmt(results.resistances.Mr, 1), unit: 'kN·m' },
    { label: 'Torsion resistance, Tr', value: fmt(results.resistances.Tr, 1), unit: 'kN·m' },
    { label: 'P/Pr', value: fmt(utilizations.u_axial, 3), unit: '—' },
    { label: 'V/Vr', value: fmt(utilizations.u_shear, 3), unit: '—' },
    { label: 'Mres/Mr', value: fmt(utilizations.u_moment, 3), unit: '—' },
    { label: 'T/Tr', value: fmt(utilizations.u_torsion, 3), unit: '—' },
    { label: 'Axial + Bending', value: fmt(utilizations.u_axial_bending, 3), unit: '—' },
    { label: 'Shear + Torsion', value: fmt(utilizations.u_shear_torsion, 3), unit: '—' },
    { label: 'Governing U', value: fmt(utilizations.U_gov, 3), unit: utilizations.strengthOK ? 'OK' : 'NG' }
  ]

  const sectionRows = [
    { label: 'Base outside diameter, D', value: fmt(section.Dbase || 610, 0), unit: 'mm' },
    { label: 'Top outside diameter, Dt', value: fmt(section.Dtop || 355, 0), unit: 'mm' },
    { label: 'Wall thickness, t', value: fmt(section.t || 12.7, 1), unit: 'mm' },
    { label: 'Inside diameter (base), dᵢ', value: fmt(section.d_i, 1), unit: 'mm' },
    { label: 'Base cross-section area, A', value: fmt(section.A, 0), unit: 'mm²' },
    { label: 'Arm average diameter, Darm', value: fmt(section.Darm || 250, 0), unit: 'mm' },
    { label: 'Arm horizontal reach, Larm', value: fmt(section.Larm || 9.0, 1), unit: 'm' },
    { label: 'Moment of inertia (base), I', value: fmt(section.I / 1e8, 2), unit: '10⁸ mm⁴' },
    { label: 'Elastic section modulus, S', value: fmt(section.S / 1e3, 1), unit: '10³ mm³' },
    { label: 'Plastic section modulus, Z', value: fmt(section.Z / 1e3, 1), unit: '10³ mm³' },
    { label: 'Radius of gyration, r', value: fmt(section.r, 1), unit: 'mm' },
    { label: 'Torsion constant, J', value: fmt(section.J / 1e8, 2), unit: '10⁸ mm⁴' },
    { label: 'Torsion modulus, Ct', value: fmt(section.Ct / 1e3, 1), unit: '10³ mm³' },
    { label: 'D/t ratio', value: fmt(section.Dt_ratio, 1), unit: '—' },
    { label: 'CSA S16 Class', value: section.Class, unit: '—' }
  ]

  const windRows = [
    { label: 'Ref wind pressure, qz', value: fmt(wind.qz, 0), unit: 'Pa' },
    { label: 'Gust wind pressure, q_gust', value: fmt(wind.q_gust || wind.qz, 0), unit: 'Pa' },
    { label: 'Sign wind force, F_sign', value: fmt(wind.F_sign, 2), unit: 'kN' },
    { label: 'Pole wind force, F_pole', value: fmt(wind.F_pole, 2), unit: 'kN' },
    { label: 'Arm wind force, F_arm', value: fmt(wind.F_arm, 2), unit: 'kN' },
    { label: 'Sign projected area, As', value: fmt(wind.A_s, 2), unit: 'm²' },
    { label: 'Pole projected area, Ap', value: fmt(wind.A_p, 2), unit: 'm²' },
    { label: 'Arm projected area, Aarm', value: fmt(wind.A_arm, 2), unit: 'm²' },
    { label: 'Base shear (service), V_W', value: fmt(wind.V_W, 2), unit: 'kN' },
    { label: 'Overturning moment, Mx_W', value: fmt(wind.Mx_W || wind.M_W, 1), unit: 'kN·m' },
    { label: 'Dead transverse moment, My_D', value: fmt(results.dead?.My_D, 1), unit: 'kN·m' },
    { label: 'Wind transverse moment, My_W', value: fmt(wind.My_W, 1), unit: 'kN·m' },
    { label: 'Governing transverse, My_S', value: fmt(wind.My_S, 1), unit: 'kN·m' },
    { label: 'Torsion (service), T_W', value: fmt(wind.T_W, 1), unit: 'kN·m' },
    { label: 'Pole self-weight, Wp', value: fmt(results.dead?.W_p, 1), unit: 'kN' },
    { label: 'Signal arm weight, Warm', value: fmt(results.dead?.W_arm, 1), unit: 'kN' },
    { label: 'DMS panel weight, Wd', value: fmt(results.dead?.W_dms, 1), unit: 'kN' },
    { label: 'Total dead axial, P_D', value: fmt(results.dead?.P_D, 1), unit: 'kN' },
    { label: 'Flow regime', value: wind.regime, unit: '—' },
    { label: 'Reynolds number', value: fmt(aero.Re), unit: '—' },
    { label: 'Vortex freq, fs', value: fmt(aero.f_s, 2), unit: 'Hz' },
    { label: 'Natural freq, fn', value: fmt(aero.f_n, 2), unit: 'Hz' },
    { label: 'Lock-in speed, Vcr', value: fmt(aero.V_cr, 1), unit: 'm/s' },
    { label: 'Reduced velocity, Ur', value: fmt(aero.U_r, 1), unit: '—' },
    { label: 'Scruton number, Sc', value: fmt(aero.Sc, 1), unit: '—' },
    { label: 'VIV risk', value: aero.vivRisk ? 'REVIEW' : 'OK', unit: '—' },
    { label: 'Galloping', value: aero.galloping ? 'FAIL' : 'OK', unit: '—' }
  ]

  const deflectionRows = [
    { label: 'Sign deflection, δ_s', value: fmt(deflection.delta_sign, 1), unit: 'mm' },
    { label: 'Pole deflection, δ_p', value: fmt(deflection.delta_pole, 1), unit: 'mm' },
    { label: 'Total deflection, δ', value: fmt(deflection.delta_total, 1), unit: 'mm' },
    { label: 'Limit H/n', value: fmt(deflection.delta_limit, 1), unit: 'mm' },
    { label: 'Status', value: deflection.deflOK ? 'OK' : 'NG', unit: '—' }
  ]

  const foundationRows = foundation ? [
    { label: 'Eccentricity, e', value: fmt(foundation.e, 3), unit: 'm' },
    { label: 'Kern check (6e ≤ D,B)', value: foundation.kernOK ? 'OK' : 'NG', unit: '—' },
    { label: 'Max bearing, P_max', value: fmt(foundation.P_max, 1), unit: 'kPa' },
    { label: 'Min bearing, P_min', value: fmt(foundation.P_min, 1), unit: 'kPa' },
    { label: 'Allowable, q_r', value: '250', unit: 'kPa' },
    { label: 'Bearing OK', value: foundation.bearingOK ? 'OK' : 'NG', unit: '—' },
    { label: 'Sliding FOS', value: fmt(foundation.FOS_sliding, 2), unit: '—' },
    { label: 'Sliding OK (≥1.5)', value: foundation.slidingOK ? 'OK' : 'NG', unit: '—' },
    { label: 'Neck face moment, M_face', value: fmt(foundation.M_face, 1), unit: 'kN·m' },
    { label: 'Pad flexural resistance, M_r', value: fmt(foundation.M_r, 1), unit: 'kN·m' },
    { label: 'Flexure OK', value: foundation.flexureOK ? 'OK' : 'NG', unit: '—' },
    { label: 'Pad shear resistance, V_c', value: fmt(foundation.V_c, 1), unit: 'kN' },
    { label: 'Shear OK', value: foundation.shearOK ? 'OK' : 'NG', unit: '—' }
  ] : []

  const anchorRows = anchors ? [
    { label: 'Steel tension, N_sar', value: fmt(anchors.N_sar, 1), unit: 'kN' },
    { label: 'Concrete pullout, N_pr', value: fmt(anchors.N_pr, 1), unit: 'kN' },
    { label: 'Steel shear, V_sar', value: fmt(anchors.V_sar, 1), unit: 'kN' },
    { label: 'Concrete pryout, V_cp', value: fmt(anchors.V_cp, 1), unit: 'kN' },
    { label: 'β_N', value: fmt(anchors.beta_N, 3), unit: '—' },
    { label: 'β_V', value: fmt(anchors.beta_V, 3), unit: '—' },
    { label: 'Interaction β_N^(5/3)+β_V^(5/3)', value: fmt(anchors.interaction, 3), unit: '—' },
    { label: 'Interaction OK (≤1.0)', value: anchors.interactionOK ? 'OK' : 'NG', unit: '—' }
  ] : []

  return (
    <div className="help-scroll">
      <div className="tabs">
        <button className={tab === 'strength' ? 'active' : ''} onClick={() => setTab('strength')}>Strength</button>
        <button className={tab === 'section' ? 'active' : ''} onClick={() => setTab('section')}>Section</button>
        <button className={tab === 'wind' ? 'active' : ''} onClick={() => setTab('wind')}>Wind</button>
        <button className={tab === 'deflection' ? 'active' : ''} onClick={() => setTab('deflection')}>Deflection</button>
        {foundation && <button className={tab === 'foundation' ? 'active' : ''} onClick={() => setTab('foundation')}>Foundation</button>}
        {anchors && <button className={tab === 'anchors' ? 'active' : ''} onClick={() => setTab('anchors')}>Anchors</button>}
      </div>

      <table className="data">
        <tbody>
          {(tab === 'strength' ? strengthRows :
            tab === 'section' ? sectionRows :
            tab === 'wind' ? windRows :
            tab === 'deflection' ? deflectionRows :
            tab === 'foundation' ? foundationRows :
            anchorRows
          ).map((row, i) => (
            <tr key={i}>
              <td>{row.label}</td>
              <td className="v">{row.value}</td>
              <td className="u">{row.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="checks">
        <div className={`check ${utilizations.strengthOK ? 'pass-card' : 'fail-card'}`}>
          <div><span>Strength utilization</span><b>{fmt(utilizations.U_gov, 3)}</b></div>
          <div className="bar"><i style={{ width: `${Math.min(100, utilizations.U_gov * 100)}%` }} className={utilizations.U_gov > 1 ? 'over' : ''} /></div>
          <strong>{fmt(utilizations.U_gov, 3)}<small> ≤ 1.0</small></strong>
          <p>Axial+bending: {fmt(utilizations.u_axial_bending, 3)} · Shear+torsion: {fmt(utilizations.u_shear_torsion, 3)}</p>
        </div>
        <div className={`check ${deflection.deflOK ? 'pass-card' : 'fail-card'}`}>
          <div><span>Tip deflection</span><b>{fmt(deflection.delta_total, 1)} mm</b></div>
          <div className="bar"><i style={{ width: `${Math.min(100, deflection.delta_total / deflection.delta_limit * 100)}%` }} className={deflection.delta_total > deflection.delta_limit ? 'over' : ''} /></div>
          <strong>{fmt(deflection.delta_total, 1)}<small> / {fmt(deflection.delta_limit, 1)} mm</small></strong>
          <p>Sign: {fmt(deflection.delta_sign, 1)} mm + Pole: {fmt(deflection.delta_pole, 1)} mm</p>
        </div>
        {foundation && (
          <div className={`check ${foundation.bearingOK && foundation.flexureOK && foundation.shearOK ? 'pass-card' : 'fail-card'}`}>
            <div><span>Foundation</span><b>{foundation.bearingOK && foundation.flexureOK && foundation.shearOK ? 'OK' : 'NG'}</b></div>
            <div className="bar"><i style={{ width: '100%' }} /></div>
            <strong>Bearing, flexure, shear</strong>
            <p>Max bearing: {fmt(foundation.P_max, 1)} kPa / 250 kPa</p>
          </div>
        )}
        {anchors && (
          <div className={`check ${anchors.interactionOK ? 'pass-card' : 'fail-card'}`}>
            <div><span>Anchor bolts</span><b>{anchors.interactionOK ? 'OK' : 'NG'}</b></div>
            <div className="bar"><i style={{ width: `${Math.min(100, anchors.interaction * 100)}%` }} className={anchors.interaction > 1 ? 'over' : ''} /></div>
            <strong>{fmt(anchors.interaction, 3)}<small> ≤ 1.0</small></strong>
            <p>β_N: {fmt(anchors.beta_N, 3)} · β_V: {fmt(anchors.beta_V, 3)}</p>
          </div>
        )}
      </div>

      <div className="gov-row">
        <div className={`gov ${gov.strengthOK === 'OK' ? 'ok' : 'ng'}`}>
          <span>Strength U</span>
          <b>{gov.U}</b>
          <em>{gov.strengthOK}</em>
        </div>
        <div className={`gov ${gov.deflOK === 'OK' ? 'ok' : 'ng'}`}>
          <span>Deflection δ</span>
          <b>{gov.delta} mm</b>
          <em>{gov.deflOK}</em>
        </div>
      </div>
    </div>
  )
}

export default ResultsPanel