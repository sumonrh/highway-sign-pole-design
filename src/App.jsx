import { useState, useEffect, useRef } from 'react'
import { runFullAnalysis } from './utils/engineering.js'
import { calculateFoundationDesign } from './utils/foundationDesign.js'
import { calculateAnchorBoltDesign } from './utils/anchorBolts.js'
import ElevationView from './components/ElevationView.jsx'
import WindTunnelView from './components/WindTunnelView.jsx'
import ResultsPanel from './components/ResultsPanel.jsx'
import HelpPanel from './components/HelpPanel.jsx'

const DEFAULT_INPUT = {
  // Pole Geometry (Benchmarked per CSA S6-19 / Nova Pole NP-CR39)
  Hpole: 7.37,
  Dbase: 610,
  Dtop: 355,
  t: 12.7,

  // Signal Arm Geometry & Loads
  Larm: 9.0,
  Darm: 250,
  harm: 7.1825, // centered with sign panel (hs = 7.1825)
  earm: 4.5,
  Warm: 10.6,
  Cd_arm: 0.5,

  // Sign Structure Geometry & Loads
  Bsign: 7.75,
  Dsign: 1.525,
  Hsign: 7.1825,
  esign: 5.125,
  Wdms: 6.0,
  Cd_s: 1.7,

  // Foundation
  Dpad: 3.0,
  Bpad: 3.0,
  hpad: 0.8,
  Dneck: 1.2,

  // Wind Loading - CAN/CSA S6-19 Cl.3.10
  qz: 480, // reference hourly wind pressure (Pa), Fernie 50-yr
  Vwind: 27.7, // m/s equivalent (q = 0.5*rho*V^2)
  Ce: 1.0,
  Cg: 2.5,
  Cd_p: 0.5,
  theta: 0,
  Kz: 1.0,
  Kzt: 1.0,
  G: 1.14,

  // Ice & Material
  t_i: 0,
  gamma_i: 9.0,
  Fy: 350,
  Es: 200000,
  gamS: 77,

  code: 'CSA'
}

function App() {
  const [input, setInput] = useState(DEFAULT_INPUT)
  const [results, setResults] = useState(null)
  const [activeTab, setActiveTab] = useState('design')
  const [activeView, setActiveView] = useState('design')
  const [showHelp, setShowHelp] = useState(false)
  const [windOn, setWindOn] = useState(false)
  const [windSpeed, setWindSpeed] = useState(27.7)
  const [windDeg, setWindDeg] = useState(0)
  const [truckOn, setTruckOn] = useState(false)
  const [truckSpeed, setTruckSpeed] = useState(25)

  useEffect(() => {
    const r = runFullAnalysis(input, input.code)
    setResults(r)
  }, [input])

  const handleInputChange = (key, value) => {
    setInput(prev => {
      const next = { ...prev, [key]: value }
      if (key === 'qz' && value > 0) {
        next.Vwind = Math.round(Math.sqrt(value / 0.625) * 10) / 10
      } else if (key === 'Vwind' && value > 0 && input.code === 'CSA') {
        next.qz = Math.round(0.625 * value * value)
      }
      return next
    })
  }

  const resetInputs = () => {
    setInput(DEFAULT_INPUT)
    setWindSpeed(DEFAULT_INPUT.Vwind)
    setWindDeg(0)
    setTruckOn(false)
    setTruckSpeed(25)
  }

  const foundation = results ? calculateFoundationDesign({
    M_f: results.demands.Mf_res || results.demands.Mf,
    N_f: results.demands.Pf + 1.2 * input.Bpad * input.Dpad * input.hpad * 24,
    V_f: results.demands.Vf,
    B: input.Bpad,
    D: input.Dpad,
    L_c: input.Dneck / 2,
    n_b: 8,
    A_b: 353,
    d_v: Math.max(0.2, input.hpad - 0.075)
  }) : null

  const anchors = results ? calculateAnchorBoltDesign({
    N_f: results.demands.Pf / 12,
    V_f: results.demands.Vf / 12,
    A_se: 353,
    f_uta: 830,
    A_brg: 0.012,
    f_c: 35,
    lambda_a: 1.0,
    N_br: 1200,
    k_cp: 1.5
  }) : null

  return (
    <div id="root">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">HSP</div>
          <div>
            <strong>Cantilever Sign Pole — Design Studio</strong>
            <small>{input.code === 'CSA' ? 'CAN/CSA S6-19 (CHBDC)' : 'AASHTO LTS + CSA S16-19'} · SI units</small>
          </div>
        </div>
        <span className="code-pill">{input.code} Code</span>
        <button className="ghost" onClick={() => setShowHelp(true)}>Reference</button>
        <div className="code-switch">
          <button className={input.code === 'CSA' ? 'on' : ''} onClick={() => handleInputChange('code', 'CSA')}>CSA</button>
          <button className={input.code === 'AASHTO' ? 'on' : ''} onClick={() => handleInputChange('code', 'AASHTO')}>AASHTO</button>
        </div>
        <div className="code-switch view-switch" role="group" aria-label="Active view">
          <button
            type="button"
            className={activeView === 'design' ? 'on' : ''}
            onClick={() => { setActiveView('design'); setActiveTab('design') }}
          >
            Design
          </button>
          <button
            type="button"
            className={activeView === 'tunnel' ? 'on' : ''}
            onClick={() => { setActiveView('tunnel'); setActiveTab('wind') }}
          >
            Wind Tunnel
          </button>
        </div>
      </header>

      <main>
        {activeView === 'tunnel' ? (
          <WindTunnelView 
            input={input} 
            results={results} 
            code={input.code}
          />
        ) : (
          <>
            <div className="intro">
              <div>
                <h1><em>Cantilever</em> Sign Pole Design</h1>
                <p className="subhead">Interactive design workspace for overhead cantilever sign structures. Computes wind loads, structural demands, CSA S16-19 member checks, serviceability deflection, foundation bearing, and anchor bolt group capacity per CSA A23.3-19 Annex D.</p>
              </div>
              <div className="status">
                <div className={`dot ${results?.governing?.strengthOK === 'OK' ? 'pass' : 'fail'}`}></div>
                <div>
                  <b>Strength: {results?.governing?.strengthOK || '—'}</b>
                  <small>U = {results?.governing?.U || '—'}</small>
                </div>
                <div className={`dot ${results?.governing?.deflOK === 'OK' ? 'pass' : 'fail'}`}></div>
                <div>
                  <b>Deflection: {results?.governing?.deflOK || '—'}</b>
                  <small>δ = {results?.governing?.delta || '—'} mm</small>
                </div>
              </div>
            </div>

            <div className="workspace">
              <aside className="inputs">
                <div className="panel-title">
                  <h2>Geometry & Loading</h2>
                  <button className="reset" onClick={resetInputs}>Reset</button>
                </div>

            <div className="input-group">
              <div className="group-head">Pole Geometry</div>
              <div className="input-list">
                <label><span>Total height, H<sub>p</sub></span><div className="number"><input type="number" step="0.01" value={input.Hpole} onChange={e => handleInputChange('Hpole', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Base OD, D</span><div className="number"><input type="number" step="5" value={input.Dbase} onChange={e => handleInputChange('Dbase', Number(e.target.value))} /><small>mm</small></div></label>
                <label><span>Top OD, D<sub>t</sub></span><div className="number"><input type="number" step="5" value={input.Dtop} onChange={e => handleInputChange('Dtop', Number(e.target.value))} /><small>mm</small></div></label>
                <label><span>Wall thickness, t</span><div className="number"><input type="number" step="0.1" value={input.t} onChange={e => handleInputChange('t', Number(e.target.value))} /><small>mm</small></div></label>
              </div>
            </div>

            <div className="input-group">
              <div className="group-head">Signal Arm</div>
              <div className="input-list">
                <label><span>Arm reach, L<sub>arm</sub></span><div className="number"><input type="number" step="0.1" value={input.Larm} onChange={e => handleInputChange('Larm', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Arm avg OD, D<sub>arm</sub></span><div className="number"><input type="number" step="5" value={input.Darm} onChange={e => handleInputChange('Darm', Number(e.target.value))} /><small>mm</small></div></label>
                <label><span>Arm height, h<sub>arm</sub></span><div className="number"><input type="number" step="0.01" value={input.harm} onChange={e => handleInputChange('harm', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Arm weight, W<sub>arm</sub></span><div className="number"><input type="number" step="0.1" value={input.Warm} onChange={e => handleInputChange('Warm', Number(e.target.value))} /><small>kN</small></div></label>
              </div>
            </div>

            <div className="input-group">
              <div className="group-head">Sign Structure</div>
              <div className="input-list">
                <label><span>Width, B<sub>s</sub></span><div className="number"><input type="number" step="0.05" value={input.Bsign} onChange={e => handleInputChange('Bsign', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Depth / height, d<sub>s</sub></span><div className="number"><input type="number" step="0.025" value={input.Dsign} onChange={e => handleInputChange('Dsign', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Sign centroid, h<sub>s</sub></span><div className="number"><input type="number" step="0.01" value={input.Hsign} onChange={e => handleInputChange('Hsign', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Sign reach, e</span><div className="number"><input type="number" step="0.01" value={input.esign} onChange={e => handleInputChange('esign', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>DMS dead load, W<sub>d</sub></span><div className="number"><input type="number" step="0.5" value={input.Wdms} onChange={e => handleInputChange('Wdms', Number(e.target.value))} /><small>kN</small></div></label>
              </div>
            </div>

            <div className="input-group">
              <div className="group-head">Foundation</div>
              <div className="input-list">
                <label><span>Pad size, B × D</span><div className="number"><input type="number" step="0.1" value={input.Bpad} onChange={e => handleInputChange('Bpad', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Pad thickness, h</span><div className="number"><input type="number" step="0.1" value={input.hpad} onChange={e => handleInputChange('hpad', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Neck depth, L<sub>c</sub></span><div className="number"><input type="number" step="0.1" value={input.Dneck} onChange={e => handleInputChange('Dneck', Number(e.target.value))} /><small>m</small></div></label>
              </div>
            </div>

            <div className="input-group">
              <div className="group-head">Wind Loading</div>
              <div className="input-list">
                {input.code === 'CSA' ? (
                  <>
                    <label><span>Ref pressure, q<sub>z</sub></span><div className="number"><input type="number" step="10" value={input.qz} onChange={e => handleInputChange('qz', Number(e.target.value))} /><small>Pa</small></div></label>
                    <label><span>Equivalent speed, V</span><div className="number"><input type="number" step="0.5" value={input.Vwind} onChange={e => { handleInputChange('Vwind', Number(e.target.value)); setWindSpeed(Number(e.target.value)) }} /><small>m/s</small></div></label>
                    <label><span>Exposure, C<sub>e</sub></span><div className="number"><input type="number" step="0.05" value={input.Ce} onChange={e => handleInputChange('Ce', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Gust, C<sub>g</sub></span><div className="number"><input type="number" step="0.05" value={input.Cg} onChange={e => handleInputChange('Cg', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Sign C<sub>h</sub> (C<sub>d</sub>)</span><div className="number"><input type="number" step="0.05" value={input.Cd_s} onChange={e => handleInputChange('Cd_s', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Pole C<sub>h,p</sub></span><div className="number"><input type="number" step="0.05" value={input.Cd_p} onChange={e => handleInputChange('Cd_p', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Arm C<sub>h,arm</sub></span><div className="number"><input type="number" step="0.05" value={input.Cd_arm} onChange={e => handleInputChange('Cd_arm', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Skew angle, θ</span><div className="number"><input type="number" step="5" value={input.theta || 0} onChange={e => handleInputChange('theta', Number(e.target.value))} /><small>°</small></div></label>
                  </>
                ) : (
                  <>
                    <label><span>Design wind speed, V</span><div className="number"><input type="number" step="1" value={input.Vwind} onChange={e => { handleInputChange('Vwind', Number(e.target.value)); setWindSpeed(Number(e.target.value)) }} /><small>m/s</small></div></label>
                    <label><span>Height factor, K<sub>z</sub></span><div className="number"><input type="number" step="0.05" value={input.Kz} onChange={e => handleInputChange('Kz', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Topographic, K<sub>zt</sub></span><div className="number"><input type="number" step="0.05" value={input.Kzt} onChange={e => handleInputChange('Kzt', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Gust factor, G</span><div className="number"><input type="number" step="0.05" value={input.G} onChange={e => handleInputChange('G', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Sign C<sub>d</sub></span><div className="number"><input type="number" step="0.05" value={input.Cd_s} onChange={e => handleInputChange('Cd_s', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Pole C<sub>d</sub></span><div className="number"><input type="number" step="0.05" value={input.Cd_p} onChange={e => handleInputChange('Cd_p', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Arm C<sub>d</sub></span><div className="number"><input type="number" step="0.05" value={input.Cd_arm} onChange={e => handleInputChange('Cd_arm', Number(e.target.value))} /><small>—</small></div></label>
                  </>
                )}
              </div>
            </div>

            <div className="input-group">
              <div className="group-head">Ice (Service)</div>
              <div className="input-list">
                <label><span>Radial thickness, t<sub>i</sub></span><div className="number"><input type="number" step="1" value={input.t_i} onChange={e => handleInputChange('t_i', Number(e.target.value))} /><small>mm</small></div></label>
                <label><span>Unit weight, γ<sub>i</sub></span><div className="number"><input type="number" step="0.1" value={input.gamma_i} onChange={e => handleInputChange('gamma_i', Number(e.target.value))} /><small>kN/m³</small></div></label>
              </div>
            </div>

            <div className="assumption">
              All calculations in SI units. CSA mode uses CHBDC Cl.3.10 wind pressure (q=0.625·C<sub>e</sub>C<sub>g</sub>V²); AASHTO mode uses LTS velocity pressure (q=0.613·K<sub>z</sub>K<sub>zt</sub>GV²). Load combos and resistances per CSA S6-19/S16-19. Not for construction.
            </div>
          </aside>

          <ElevationView 
            input={input} 
            results={results} 
            windOn={windOn} 
            setWindOn={setWindOn} 
          />

          <aside className="results">
            <div className="tabs">
              <button className={activeTab === 'design' ? 'active' : ''} onClick={() => { setActiveTab('design'); setActiveView('design') }}>Design Checks</button>
              <button className={activeTab === 'wind' ? 'active' : ''} onClick={() => { setActiveTab('wind'); setActiveView('tunnel') }}>Wind Tunnel</button>
              <button className={activeTab === 'foundation' ? 'active' : ''} onClick={() => { setActiveTab('foundation'); setActiveView('design') }}>Foundation</button>
            </div>

            {activeTab === 'design' && <ResultsPanel results={results} />}
            {activeTab === 'foundation' && foundation && anchors && (
              <ResultsPanel results={results} foundation={foundation} anchors={anchors} />
            )}
          </aside>
        </div>
      </>
    )}
  </main>

      <footer>
        <span>Cantilever Sign Pole Design Studio — CSA S6-19 / AASHTO LTS / CSA S16-19 / CSA A23.3-19</span>
        <span>For preliminary screening only. Detailed design per applicable codes required.</span>
      </footer>

      {showHelp && <HelpPanel onClose={() => setShowHelp(false)} code={input.code} />}
    </div>
  )
}

export default App