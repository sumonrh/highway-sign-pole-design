import { useState, useEffect, useRef } from 'react'
import { runFullAnalysis } from './utils/engineering.js'
import { calculateFoundationDesign } from './utils/foundationDesign.js'
import { calculateAnchorBoltDesign } from './utils/anchorBolts.js'
import ElevationView from './components/ElevationView.jsx'
import WindTunnelView from './components/WindTunnelView.jsx'
import ResultsPanel from './components/ResultsPanel.jsx'
import HelpPanel from './components/HelpPanel.jsx'

const DEFAULT_INPUT = {
  Hpole: 18.5, Hsign: 16.0, esign: 1.2, Bsign: 4.5, Dsign: 2.8,
  Dbase: 650, Dtop: 450, t: 12,
  Dpad: 3.0, Bpad: 3.0, hpad: 0.8, Dneck: 1.2,
  Vwind: 38, Ce: 1.0, Cg: 2.0, Kz: 1.2, Kzt: 1.0, G: 1.0,
  Cd_s: 1.2, Cd_p: 0.7, Wdms: 85,
  t_i: 10, gamma_i: 8.5,
  code: 'CSA'
}

function App() {
  const [input, setInput] = useState(DEFAULT_INPUT)
  const [results, setResults] = useState(null)
  const [activeTab, setActiveTab] = useState('design')
  const [showHelp, setShowHelp] = useState(false)
  const [windOn, setWindOn] = useState(false)
  const [windSpeed, setWindSpeed] = useState(38)
  const [windDeg, setWindDeg] = useState(0)
  const [truckOn, setTruckOn] = useState(false)
  const [truckSpeed, setTruckSpeed] = useState(25)

  useEffect(() => {
    const r = runFullAnalysis(input, input.code)
    setResults(r)
  }, [input])

  const handleInputChange = (key, value) => {
    setInput(prev => ({ ...prev, [key]: value }))
  }

  const resetInputs = () => {
    setInput(DEFAULT_INPUT)
    setWindSpeed(DEFAULT_INPUT.Vwind)
    setWindDeg(0)
    setTruckOn(false)
    setTruckSpeed(25)
  }

  const foundation = results ? calculateFoundationDesign({
    M_f: results.demands.Mf,
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
      </header>

      <main>
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
                <label><span>Total height, H<sub>p</sub></span><div className="number"><input type="number" step="0.1" value={input.Hpole} onChange={e => handleInputChange('Hpole', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Sign centroid, h<sub>s</sub></span><div className="number"><input type="number" step="0.1" value={input.Hsign} onChange={e => handleInputChange('Hsign', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Sign eccentricity, e</span><div className="number"><input type="number" step="0.1" value={input.esign} onChange={e => handleInputChange('esign', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Base OD, D</span><div className="number"><input type="number" step="10" value={input.Dbase} onChange={e => handleInputChange('Dbase', Number(e.target.value))} /><small>mm</small></div></label>
                <label><span>Top OD, D<sub>t</sub></span><div className="number"><input type="number" step="10" value={input.Dtop} onChange={e => handleInputChange('Dtop', Number(e.target.value))} /><small>mm</small></div></label>
                <label><span>Wall thickness, t</span><div className="number"><input type="number" step="1" value={input.t} onChange={e => handleInputChange('t', Number(e.target.value))} /><small>mm</small></div></label>
              </div>
            </div>

            <div className="input-group">
              <div className="group-head">Sign Panel</div>
              <div className="input-list">
                <label><span>Width, B<sub>s</sub></span><div className="number"><input type="number" step="0.1" value={input.Bsign} onChange={e => handleInputChange('Bsign', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>Depth, d<sub>s</sub></span><div className="number"><input type="number" step="0.1" value={input.Dsign} onChange={e => handleInputChange('Dsign', Number(e.target.value))} /><small>m</small></div></label>
                <label><span>DMS weight, W<sub>d</sub></span><div className="number"><input type="number" step="1" value={input.Wdms} onChange={e => handleInputChange('Wdms', Number(e.target.value))} /><small>kN</small></div></label>
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
                <label><span>Design wind speed, V</span><div className="number"><input type="number" step="1" value={input.Vwind} onChange={e => { handleInputChange('Vwind', Number(e.target.value)); setWindSpeed(Number(e.target.value)) }} /><small>m/s</small></div></label>
                {input.code === 'CSA' ? (
                  <>
                    <label><span>Exposure, C<sub>e</sub></span><div className="number"><input type="number" step="0.05" value={input.Ce} onChange={e => handleInputChange('Ce', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Gust, C<sub>g</sub></span><div className="number"><input type="number" step="0.05" value={input.Cg} onChange={e => handleInputChange('Cg', Number(e.target.value))} /><small>—</small></div></label>
                  </>
                ) : (
                  <>
                    <label><span>Height factor, K<sub>z</sub></span><div className="number"><input type="number" step="0.05" value={input.Kz} onChange={e => handleInputChange('Kz', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Topographic, K<sub>zt</sub></span><div className="number"><input type="number" step="0.05" value={input.Kzt} onChange={e => handleInputChange('Kzt', Number(e.target.value))} /><small>—</small></div></label>
                    <label><span>Gust factor, G</span><div className="number"><input type="number" step="0.05" value={input.G} onChange={e => handleInputChange('G', Number(e.target.value))} /><small>—</small></div></label>
                  </>
                )}
                <label><span>Sign C<sub>d</sub></span><div className="number"><input type="number" step="0.05" value={input.Cd_s} onChange={e => handleInputChange('Cd_s', Number(e.target.value))} /><small>—</small></div></label>
                <label><span>Pole C<sub>d</sub></span><div className="number"><input type="number" step="0.05" value={input.Cd_p} onChange={e => handleInputChange('Cd_p', Number(e.target.value))} /><small>—</small></div></label>
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

          <section className="canvas-panel">
            <ElevationView 
              input={input} 
              results={results} 
              windOn={windOn} 
              setWindOn={setWindOn} 
            />
          </section>

          <aside className="results">
            <div className="tabs">
              <button className={activeTab === 'design' ? 'active' : ''} onClick={() => setActiveTab('design')}>Design Checks</button>
              <button className={activeTab === 'wind' ? 'active' : ''} onClick={() => setActiveTab('wind')}>Wind Tunnel</button>
              <button className={activeTab === 'foundation' ? 'active' : ''} onClick={() => setActiveTab('foundation')}>Foundation</button>
            </div>

            {activeTab === 'design' && <ResultsPanel results={results} />}
            {activeTab === 'wind' && <WindTunnelView 
              input={input} 
              results={results} 
              windSpeed={windSpeed}
              setWindSpeed={setWindSpeed}
              windDeg={windDeg}
              setWindDeg={setWindDeg}
              truckOn={truckOn}
              setTruckOn={setTruckOn}
              truckSpeed={truckSpeed}
              setTruckSpeed={setTruckSpeed}
            />}
            {activeTab === 'foundation' && foundation && anchors && (
              <ResultsPanel results={results} foundation={foundation} anchors={anchors} />
            )}
          </aside>
        </div>
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