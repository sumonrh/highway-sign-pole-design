import { useState, useEffect, useRef } from 'react'

function ElevationView({ input, results, windOn, setWindOn }) {
  const [sway, setSway] = useState(0)
  const [sparkPhase, setSparkPhase] = useState(0)
  const animationRef = useRef(0)

  const Hpole = input.Hpole || 7.37
  const Larm = input.Larm || 9.0
  const Darm = input.Darm || 250
  const harm = input.harm || 6.42
  const earm = input.earm ?? (Larm / 2)
  const Hsign = input.Hsign || 7.1825
  const esign = input.esign || 5.125
  const Bsign = input.Bsign || 7.75
  const Dsign = input.Dsign || 1.525
  const Warm = input.Warm || 10.6
  const Wdms = input.Wdms || 6.0

  const maxSway = Math.min(
    0.16,
    ((results?.deflection?.delta_total || 0) / (Hpole * 1000)) * 6 +
      (results?.utilizations?.U_gov || 0) * 0.02
  )
  const freq = 0.9 + (input.Vwind || 28) / 60

  useEffect(() => {
    if (!windOn) {
      setSway(0)
      return
    }
    let last = 0
    const animate = (now) => {
      if (!last) last = now
      const dt = (now - last) / 1000
      const q = 0.6 + 0.4 * Math.sin(2 * Math.PI * 0.18 * dt)
      const w = 0.12 * Math.sin(2 * Math.PI * (freq * 3.3) * dt)
      setSway(maxSway * q * Math.sin(2 * Math.PI * freq * dt) + maxSway * w)
      setSparkPhase((p) => (p + 1) % 40)
      last = now
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [windOn, maxSway, freq, input.Vwind, Hpole, results])

  if (!results) return <div className="pole-svg" style={{ aspectRatio: '520/460' }} />

  const c = 520
  const h = 460

  const maxExtentX = Math.max(Larm + 0.5, esign + Bsign / 2 + 0.6, 9.5)
  const maxExtentY = Math.max(Hpole, Hsign + Dsign / 2) + 0.6

  const v = Math.min(240 / maxExtentY, 300 / maxExtentX)
  const x = 110
  const m = 350
  const u = m - Hpole * v

  const baseW = Math.max(10, (input.Dbase / 1000) * v)
  const topW = Math.max(5, (input.Dtop / 1000) * v)
  const armThick = Math.max(5, (Darm / 1000) * v)

  // Sign geometry in SVG
  const xSignCenter = x + esign * v
  const ySignCenter = m - Hsign * v
  const signW = Bsign * v
  const signH = Dsign * v
  const xSignLeft = xSignCenter - signW / 2
  const xSignRight = xSignCenter + signW / 2

  // Arm geometry in SVG - strictly centered with the sign panel
  const yArm = ySignCenter
  const xArmEnd = x + Larm * v
  const xArmExp = (x + xSignLeft) / 2

  const rot = `rotate(${(sway * 180) / Math.PI} ${x} ${m})`
  const fmt = (n, d = 1) => Number(n).toFixed(d)

  const F_sign = results.wind.F_sign || 0
  const F_pole = results.wind.F_pole || 0
  const F_arm = results.wind.F_arm || 0
  const Pf = results.demands.Pf || 0
  const Vf = results.demands.Vf || 0
  const Mf = results.demands.Mf_res || results.demands.Mf || 0
  const Tf = results.demands.Tf || 0

  return (
    <section className="canvas-panel">
      <div className="drawing-header">
        <div>
          <p className="eyebrow">LIVE ELEVATION</p>
          <h2>Loads, Reactions & Sway</h2>
        </div>
        <label className="wind-toggle">
          <input type="checkbox" checked={windOn} onChange={(e) => setWindOn(e.target.checked)} />
          <span>Wind animation</span>
        </label>
      </div>

      <svg
        viewBox={`0 0 ${c} ${h}`}
        role="img"
        className="pole-svg"
        aria-label="Cantilever sign pole elevation with sign pole arm, DMS structure, wind, dead and base reactions"
      >
        <defs>
          <marker id="fArrow" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#1668d6" />
          </marker>
          <marker id="rArrow" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#c0392b" />
          </marker>
          <marker id="gArrow" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#1f8a4c" />
          </marker>
          <linearGradient id="poleFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#9fb4d6" />
            <stop offset="0.5" stopColor="#c4d2ea" />
            <stop offset="1" stopColor="#7d95bd" />
          </linearGradient>
          <linearGradient id="armFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b0c4de" />
            <stop offset="0.5" stopColor="#dce6f2" />
            <stop offset="1" stopColor="#93a8c5" />
          </linearGradient>
        </defs>

        {/* Wind gust streaks */}
        {windOn &&
          [0, 1, 2, 3, 4].map((i) => {
            const H = u + 15 + i * 45
            const Z = (sparkPhase + i * 8) % 40
            return (
              <g key={i} className="streak" opacity="0.5">
                <line x1={c - 6 - Z} y1={H} x2={c - 46 - Z} y2={H} stroke="#7fb0e6" strokeWidth="2" strokeLinecap="round" />
                <line x1={c - 22 - Z} y1={H + 12} x2={c - 54 - Z} y2={H + 12} stroke="#a9cbf0" strokeWidth="1.6" strokeLinecap="round" />
              </g>
            )
          })}

        {/* Ground line & Foundation */}
        <line x1={x - 80} y1={m} x2={c - 20} y2={m} stroke="#8a8a8a" strokeDasharray="6 5" />
        <rect x={x - baseW * 1.5} y={m} width={baseW * 3.0} height={24} rx={2} fill="#c9ccd2" stroke="#5a5a5a" />
        <text x={x} y={m + 78} className="dim" textAnchor="middle">
          Pad {fmt(input.Bpad, 1)}×{fmt(input.Dpad, 1)}×{fmt(input.hpad, 1)}m
        </text>

        {/* Dynamic Structure with Sway */}
        <g transform={rot} style={{ transition: windOn ? 'none' : 'transform 0.4s ease' }}>
          {/* Vertical Tapered Pole */}
          <path
            d={`M${x - baseW / 2} ${m} L${x - topW / 2} ${u} L${x + topW / 2} ${u} L${x + baseW / 2} ${m} Z`}
            fill="url(#poleFill)"
            stroke="#33507f"
            strokeWidth="1.6"
          />

          {/* Horizontal Signal Arm (centered with the sign) */}
          <rect
            x={x}
            y={yArm - armThick / 2}
            width={Math.max(10, xArmEnd - x)}
            height={armThick}
            rx={armThick / 3}
            fill="url(#armFill)"
            stroke="#33507f"
            strokeWidth="1.4"
          />
          {/* Arm end cap */}
          <ellipse cx={xArmEnd} cy={yArm} rx={2.5} ry={armThick / 2} fill="#33507f" />

          {/* Sign panel mounting brackets */}
          <rect x={xSignLeft + 20} y={yArm - signH * 0.45} width={6} height={signH * 0.9} rx={1} fill="#505a69" />
          <rect x={xSignRight - 26} y={yArm - signH * 0.45} width={6} height={signH * 0.9} rx={1} fill="#505a69" />

          {/* DMS Sign Panel (solid body centered vertically on the arm) */}
          <rect
            x={xSignLeft}
            y={ySignCenter - signH / 2}
            width={signW}
            height={signH}
            rx={3}
            fill="#232731"
            stroke="#0d0f14"
            strokeWidth="1.6"
          />
          <rect
            x={xSignLeft + 3}
            y={ySignCenter - signH / 2 + 3}
            width={Math.max(0, signW - 6)}
            height={Math.max(0, signH - 6)}
            rx={2}
            fill="none"
            stroke="#f2c14e"
            strokeWidth="1.2"
            opacity="0.85"
          />
          <text x={xSignCenter} y={ySignCenter + 4} className="sign-label" textAnchor="middle" fontSize="11">
            DMS PANEL {fmt(Bsign, 1)}m × {fmt(Dsign, 2)}m
          </text>

          {/* Dead load on DMS panel Wd (above sign) */}
          <line
            x1={xSignCenter}
            y1={ySignCenter - signH / 2 - 34}
            x2={xSignCenter}
            y2={ySignCenter - signH / 2 - 4}
            stroke="#1f8a4c"
            strokeWidth="2.2"
            markerEnd="url(#gArrow)"
          />
          <text
            x={xSignCenter}
            y={ySignCenter - signH / 2 - 40}
            className="load green"
            textAnchor="middle"
          >
            Wd {fmt(Wdms, 1)} kN
          </text>

          {/* Dead load on Arm Warm (above exposed arm segment, isolated from sign) */}
          <line
            x1={xArmExp}
            y1={yArm - 34}
            x2={xArmExp}
            y2={yArm - 6}
            stroke="#1f8a4c"
            strokeWidth="2.0"
            markerEnd="url(#gArrow)"
          />
          <text
            x={xArmExp}
            y={yArm - 40}
            className="load green"
            textAnchor="middle"
          >
            Warm {fmt(Warm, 1)} kN
          </text>

          {/* Wind Force on Sign F_sign (upper right of sign) */}
          <line
            x1={xSignRight + 52}
            y1={ySignCenter - 10}
            x2={xSignRight + 6}
            y2={ySignCenter - 10}
            stroke="#1668d6"
            strokeWidth="2.6"
            markerEnd="url(#fArrow)"
          />
          <text
            x={xSignRight + 52}
            y={ySignCenter - 18}
            className="load blue"
            textAnchor="end"
          >
            F_sign {fmt(F_sign, 1)} kN
          </text>

          {/* Wind Force on Signal Arm F_arm (lower right of sign, parallel with clear separation) */}
          <line
            x1={xArmEnd + 52}
            y1={ySignCenter + 22}
            x2={xArmEnd + 6}
            y2={ySignCenter + 22}
            stroke="#1668d6"
            strokeWidth="2.0"
            markerEnd="url(#fArrow)"
          />
          <text
            x={xArmEnd + 52}
            y={ySignCenter + 36}
            className="load blue"
            textAnchor="end"
          >
            F_arm {fmt(F_arm, 1)} kN
          </text>

          {/* Wind Force on Pole Shaft F_pole (at mid-height) */}
          <line
            x1={x + 60}
            y1={(m + u) / 2}
            x2={x + 12}
            y2={(m + u) / 2}
            stroke="#1668d6"
            strokeWidth="2.2"
            markerEnd="url(#fArrow)"
          />
          <text
            x={x + 65}
            y={(m + u) / 2 - 4}
            className="load blue"
            textAnchor="start"
          >
            F_pole {fmt(F_pole, 1)} kN
          </text>

          {/* Base Factored Reactions - uncluttered */}
          {/* Moment Mf */}
          <path
            d={`M${x - 28} ${m + 14} A 28 28 0 0 1 ${x - 4} ${m - 22}`}
            fill="none"
            stroke="#c0392b"
            strokeWidth="2.4"
            markerEnd="url(#rArrow)"
          />
          <text x={x - 36} y={m - 8} className="load red" textAnchor="end">
            Mf {fmt(Mf, 0)} kN·m
          </text>

          {/* Shear Vf */}
          <line
            x1={x - 70}
            y1={m + 44}
            x2={x - 14}
            y2={m + 44}
            stroke="#c0392b"
            strokeWidth="2.4"
            markerEnd="url(#rArrow)"
          />
          <text x={x - 42} y={m + 36} className="load red" textAnchor="middle">
            Vf {fmt(Vf, 1)} kN
          </text>

          {/* Axial Pf */}
          <line
            x1={x + 18}
            y1={m + 64}
            x2={x + 18}
            y2={m + 28}
            stroke="#c0392b"
            strokeWidth="2.4"
            markerEnd="url(#rArrow)"
          />
          <text x={x + 28} y={m + 50} className="load red" textAnchor="start">
            Pf {fmt(Pf, 1)} kN
          </text>

          {/* Torsion Tf */}
          <circle cx={x} cy={m - 2} r={4.5} fill="#a02090" />
          <text x={x + 16} y={m - 6} className="load purple" textAnchor="start">
            Tf {fmt(Tf, 0)} kN·m
          </text>
        </g>

        {/* Dimension labels */}
        <text x={x - baseW / 2 - 16} y={(u + m) / 2 + 4} className="dim" textAnchor="end">
          H = {fmt(Hpole, 2)} m
        </text>
        <text x={x + (Larm * v) / 2} y={ySignCenter + signH / 2 + 20} className="dim" textAnchor="middle">
          L_arm = {fmt(Larm, 1)} m
        </text>
        <text x={(x + xSignCenter) / 2} y={m - 12} className="dim" textAnchor="middle">
          e = {fmt(esign, 2)} m
        </text>
      </svg>

      <div className="fig-result">
        <span><b>qz</b> {fmt(results.wind.qz, 0)} Pa</span>
        <span><b>class</b> {results.section.Class}</span>
        <span className={results.utilizations.strengthOK ? 'ok' : 'ng'}>
          <b>U</b> {fmt(results.utilizations.U_gov, 3)} {results.utilizations.strengthOK ? 'OK' : 'NG'}
        </span>
        <span className={results.deflection.deflOK ? 'ok' : 'ng'}>
          <b>δ</b> {fmt(results.deflection.delta_total, 1)} / {fmt(results.deflection.delta_limit, 1)} mm
        </span>
      </div>
    </section>
  )
}

export default ElevationView