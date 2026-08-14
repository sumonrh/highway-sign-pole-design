import { useState, useEffect, useRef } from 'react'

function ElevationView({ input, results, windOn, setWindOn }) {
  const [sway, setSway] = useState(0)
  const [sparkPhase, setSparkPhase] = useState(0)
  const animationRef = useRef(0)

  const maxSway = Math.min(0.16, results?.deflection?.delta_total / (input.Hpole * 1000) * 6 + (results?.utilizations?.U_gov || 0) * 0.02)
  const freq = 0.9 + input.Vwind / 60

  useEffect(() => {
    if (!windOn) { setSway(0); return }
    let last = 0
    const animate = (now) => {
      if (!last) last = now
      const dt = (now - last) / 1000
      const q = 0.6 + 0.4 * Math.sin(2 * Math.PI * 0.18 * dt)
      const w = 0.12 * Math.sin(2 * Math.PI * (freq * 3.3) * dt)
      setSway(maxSway * q * Math.sin(2 * Math.PI * freq * dt) + maxSway * w)
      setSparkPhase(p => (p + 1) % 40)
      last = now
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [windOn, maxSway, freq, input.Vwind, input.Hpole, results])

  if (!results) return <div className="pole-svg" style={{ aspectRatio: '460/470' }} />

  const c = 460, h = 470, d = 340, f = 240
  const p = Math.max(0.5, input.esign + input.Bsign / 2)
  const v = d / input.Hpole
  const baseW = Math.max(7, input.Dbase / 1000 * v)
  const topW = Math.max(4, input.Dtop / 1000 * v)
  const x = 150, m = 60 + d, u = m - input.Hpole * v
  const g = Math.max(7, input.Dbase / 1000 * v)
  const S = x + input.esign * v, R = m - input.Hsign * v
  const C = input.Bsign * v, T = input.Dsign * v
  const rot = `rotate(${sway * 180 / Math.PI} ${x} ${m})`

  const fmt = (n, d = 1) => Number(n).toFixed(d)

  return (
    <section className="canvas-panel">
      <div className="drawing-header">
        <div>
          <p className="eyebrow">LIVE ELEVATION</p>
          <h2>Loads, Reactions & Sway</h2>
        </div>
        <label className="wind-toggle">
          <input type="checkbox" checked={windOn} onChange={e => setWindOn(e.target.checked)} />
          <span>Wind animation</span>
        </label>
      </div>
      <svg viewBox={`0 0 ${c} ${h}`} role="img" className="pole-svg" aria-label="Cantilever sign pole elevation with wind, dead, ice and base reaction forces">
        <defs>
          <marker id="fArrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#1668d6" /></marker>
          <marker id="rArrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#c0392b" /></marker>
          <marker id="gArrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#1f8a4c" /></marker>
          <linearGradient id="poleFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#9fb4d6" />
            <stop offset="0.5" stopColor="#c4d2ea" />
            <stop offset="1" stopColor="#7d95bd" />
          </linearGradient>
        </defs>
        {windOn && [0,1,2,3,4].map(i => {
          const H = u + 20 + i * 46
          const Z = (sparkPhase + i * 8) % 40
          return (
            <g key={i} className="streak" opacity="0.5">
              <line x1={c - 6 - Z} y1={H} x2={c - 46 - Z} y2={H} stroke="#7fb0e6" strokeWidth="2" strokeLinecap="round" />
              <line x1={c - 22 - Z} y1={H + 12} x2={c - 54 - Z} y2={H + 12} stroke="#a9cbf0" strokeWidth="1.6" strokeLinecap="round" />
            </g>
          )
        })}
        <line x1={x - 90} y1={m} x2={c - 20} y2={m} stroke="#8a8a8a" strokeDasharray="6 5" />
        <rect x={x - g * 0.95} y={m} width={g * 1.9} height={26} rx={2} fill="#c9ccd2" stroke="#5a5a5a" />
        <text x={x} y={m + 44} className="dim" textAnchor="middle">Pad {fmt(input.Dpad,1)}×{fmt(input.Bpad,1)}×{fmt(input.hpad,1)}m — O{fmt(input.Dneck,2)}m neck</text>
        <g transform={rot} style={{ transition: windOn ? 'none' : 'transform 0.4s ease' }}>
          <path d={`M${x - g/2} ${m} L${x - topW/2} ${u} L${x + topW/2} ${u} L${x + g/2} ${m} Z`} fill="url(#poleFill)" stroke="#33507f" strokeWidth="1.6" />
          <line x1={x} y1={R} x2={S - C/2} y2={R} stroke="#33507f" strokeWidth="3" />
          <rect x={S - C/2} y={R - T/2} width={C} height={T} rx={2} fill="#2b2f3a" stroke="#0d0f14" strokeWidth="1.4" />
          <rect x={S - C/2 + 4} y={R - T/2 + 4} width={Math.max(0, C - 8)} height={Math.max(0, T - 8)} rx={1} fill="none" stroke="#f2c14e" strokeWidth="1" opacity="0.7" />
          <text x={S} y={R + 3} className="sign-label" textAnchor="middle">DMS PANEL</text>
          {(() => {
            const L = Math.min(S + C/2 + 52, c - 6)
            return (
              <>
                <line x1={L} y1={R} x2={S + C/2 + 4} y2={R} stroke="#1668d6" strokeWidth="2.6" markerEnd="url(#fArrow)" />
                <text x={L} y={R - 8} className="load blue" textAnchor="end">F_sign {fmt(results.wind.F_sign,1)} kN</text>
              </>
            )
          })()}
          <line x1={x + 46} y1={(m + u) / 2} x2={x + 4} y2={(m + u) / 2} stroke="#1668d6" strokeWidth="2.2" markerEnd="url(#fArrow)" />
          <text x={x + 50} y={(m + u) / 2 - 5} className="load blue">F_pole {fmt(results.wind.F_pole,1)} kN</text>
          <line x1={S} y1={R - T/2 - 40} x2={S} y2={R - T/2 - 4} stroke="#1f8a4c" strokeWidth="2.2" markerEnd="url(#gArrow)" />
          <text x={S + 6} y={R - T/2 - 26} className="load green">Wd {fmt(input.Wdms,1)} kN</text>
          <line x1={x} y1={m + 82} x2={x} y2={m + 34} stroke="#c0392b" strokeWidth="2.6" markerEnd="url(#rArrow)" />
          <text x={x + 6} y={m + 70} className="load red">Pf {fmt(results.demands.Pf,1)} kN</text>
          <line x1={x - 70} y1={m + 54} x2={x - 10} y2={m + 54} stroke="#c0392b" strokeWidth="2.6" markerEnd="url(#rArrow)" />
          <text x={x - 148} y={m + 50} className="load red">Vf {fmt(results.demands.Vf,1)} kN</text>
          <path d={`M${x - 34} ${m + 12} A 34 34 0 0 1 ${x + 2} ${m - 22}`} fill="none" stroke="#c0392b" strokeWidth="2.4" markerEnd="url(#rArrow)" />
          <text x={x - 150} y={m + 22} className="load red">Mf {fmt(results.demands.Mf,0)} kN·m</text>
          <circle cx={x} cy={m - 2} r={4} fill="#a02090" />
          <text x={x + 14} y={m - 6} className="load purple">Tf {fmt(results.demands.Tf,0)} kN·m</text>
        </g>
        <text x={x - g/2 - 8} y={(u + m) / 2} className="dim" textAnchor="end">H = {fmt(input.Hpole,1)} m</text>
        <text x={(x + S) / 2} y={R - T/2 - 6} className="dim" textAnchor="middle">e = {fmt(input.esign,1)} m</text>
      </svg>
      <div className="fig-result">
        <span><b>qz</b> {fmt(results.wind.qz,0)} Pa</span>
        <span><b>class</b> {results.section.Class}</span>
        <span className={results.utilizations.strengthOK ? 'ok' : 'ng'}><b>U</b> {fmt(results.utilizations.U_gov,2)} {results.utilizations.strengthOK ? 'OK' : 'NG'}</span>
        <span className={results.deflection.deflOK ? 'ok' : 'ng'}><b>δ</b> {fmt(results.deflection.delta_total,1)} / {fmt(results.deflection.delta_limit,1)} mm</span>
      </div>
    </section>
  )
}

export default ElevationView