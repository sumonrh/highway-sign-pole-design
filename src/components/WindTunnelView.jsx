import { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

function WindTunnelHUD({ input, results, windSpeed, setWindSpeed, windDeg, setWindDeg }) {
  const rho = 1.225
  const q = 0.5 * rho * windSpeed * windSpeed
  const Re = windSpeed * (input.Dbase / 1000) / 1.5e-5
  const regime = Re < 2e5 ? 'Subcritical' : Re < 3.5e5 ? 'Critical' : Re < 1e6 ? 'Supercritical' : 'Transcritical'
  const F_sign = q * input.Cd_s * (input.Bsign * input.Dsign) / 1000
  const F_pole = q * input.Cd_p * ((input.Dbase + input.Dtop) / 2 / 1000) * input.Hpole / 1000
  const V_W = F_sign + F_pole
  const M_W = F_sign * input.Hsign + F_pole * (input.Hpole / 2)
  const T_W = F_sign * input.esign
  const D_avg = (input.Dbase + input.Dtop) / 2 / 1000
  const fs = 0.2 * windSpeed / D_avg
  const fn = results?.aerodynamics?.f_n || 1.0
  const Vcr = fn * D_avg / 0.2
  const Ur = windSpeed / (fn * D_avg)
  const Sc = results?.aerodynamics?.Sc || 20
  const St = 0.2
  const vivRisk = Sc < 10 && Math.abs(Ur - 6) < 1.5
  const galloping = windSpeed > (2 * Sc * fn * D_avg)

  const fmt = (n, d = 1) => Number(n).toFixed(d)

  return (
    <aside className="tunnel-hud">
      <div className="result-header">
        <div>
          <p className="eyebrow">DYNAMIC WIND LOAD · ESTIMATE</p>
          <h2>Wind on the Structure</h2>
        </div>
        <span>{regime}</span>
      </div>
      <div className="wind-inputs">
        <label className="wind-input">
          Wind speed
          <input type="number" min={0} max={120} step={1} value={windSpeed} onChange={e => setWindSpeed(Number(e.target.value))} />
          <span>m/s</span>
        </label>
        <label className="wind-input">
          Direction
          <input type="number" min={0} max={360} step={5} value={windDeg} onChange={e => setWindDeg(Number(e.target.value))} />
          <span>°</span>
        </label>
      </div>
      <p className="dir-note">0° = wind square to the sign face; sign load ∝ cos²θ.</p>
      <div className="fig-result">
        <span><b>V</b> {fmt(windSpeed,0)} m/s</span>
        <span><b>Re</b> {fmt(Re)}</span>
        <span className={vivRisk ? 'ng' : 'ok'}><b>VIV</b> {vivRisk ? 'REVIEW' : 'OK'}</span>
        <span className={galloping ? 'ng' : 'ok'}><b>Galloping</b> {galloping ? 'FAIL' : 'OK'}</span>
      </div>
      <table className="data">
        <tbody>
          <tr><td>Dynamic pressure, q = ½ρV²</td><td className="v">{fmt(q,0)}</td><td className="u">Pa</td></tr>
          <tr><td>Wind drag on sign, F_sign</td><td className="v">{fmt(F_sign,2)}</td><td className="u">kN</td></tr>
          <tr><td>Wind drag on pole, F_pole</td><td className="v">{fmt(F_pole,2)}</td><td className="u">kN</td></tr>
          <tr><td>Base shear (service), V_W</td><td className="v">{fmt(V_W,2)}</td><td className="u">kN</td></tr>
          <tr><td>Overturning moment, M_W</td><td className="v">{fmt(M_W,1)}</td><td className="u">kN·m</td></tr>
          <tr><td>Torsion (eccentric sign), T_W</td><td className="v">{fmt(T_W,1)}</td><td className="u">kN·m</td></tr>
          <tr><td>Vortex-shedding freq, fs</td><td className="v">{fmt(fs,2)}</td><td className="u">Hz</td></tr>
          <tr><td>Natural frequency, fn</td><td className="v">{fmt(fn,2)}</td><td className="u">Hz</td></tr>
          <tr><td>Lock-in wind speed, Vcr</td><td className="v">{fmt(Vcr,1)}</td><td className="u">m/s</td></tr>
          <tr><td>Reduced velocity, Ur</td><td className="v">{fmt(Ur,1)}</td><td className="u">—</td></tr>
          <tr><td>Scruton number, Sc</td><td className="v">{fmt(Sc,1)}</td><td className="u">—</td></tr>
          <tr><td>Strouhal number, St</td><td className="v">{fmt(St,2)}</td><td className="u">—</td></tr>
        </tbody>
      </table>
      <p className="assumption">Flow model superposes exact inviscid potential-flow fields for a circular cylinder (pole, per height) and a sphere doublet (sign blockage), with an empirical Kármán wake at fs = St·V/D. Forces are service wind demands from the design model — indicative only, for visualising the wind–structure interaction. Not for design or construction.</p>
    </aside>
  )
}

function TruckSlipstreamHUD({ truckSpeed }) {
  return (
    <aside className="tunnel-hud truck-fx">
      <div className="result-header">
        <div>
          <p className="eyebrow">TRUCK SLIPSTREAM · SESSION PEAK</p>
          <h2>Max truck-induced effect on pole</h2>
        </div>
        <span>{truckSpeed} m/s truck</span>
      </div>
      <div className="tkfx-rows">
        {[
          ['Peak slipstream at pole', 'm/s'],
          ['Peak dynamic pressure', 'Pa'],
          ['Added base shear', 'kN'],
          ['Added moment', 'kN·m'],
          ['Peak dynamic tip sway', 'mm']
        ].map(([label, unit]) => (
          <div key={label} className="tkfx-row">
            <span>{label}</span>
            <b>0.0</b>
            <i>{unit}</i>
          </div>
        ))}
      </div>
      <p className="dir-note">Running maxima at the current wind and truck speed (reset when either changes) — illustrative, not code loads.</p>
    </aside>
  )
}

function WindTunnelStage({ input, windSpeed, windDeg, truckOn, truckSpeed, backgroundColor }) {
  const mountRef = useRef(null)
  const [scene, setScene] = useState(null)

  useEffect(() => {
    if (!mountRef.current) return

    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    mountRef.current.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(backgroundColor)
    setScene(scene)

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(30, 20, 30)
    camera.lookAt(0, 10, 0)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.target.set(0, 8, 0)

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1)
    dirLight.position.set(20, 40, 20)
    dirLight.castShadow = true
    scene.add(dirLight)

    const poleGroup = new THREE.Group()
    const poleGeometry = new THREE.CylinderGeometry(input.Dtop / 2000, input.Dbase / 2000, input.Hpole, 16)
    const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x5a7ab8, roughness: 0.7, metalness: 0.3 })
    const poleMesh = new THREE.Mesh(poleGeometry, poleMaterial)
    poleMesh.position.y = input.Hpole / 2
    poleMesh.castShadow = true
    poleMesh.receiveShadow = true
    poleGroup.add(poleMesh)

    const signGeometry = new THREE.BoxGeometry(input.Bsign, input.Dsign, 0.15)
    const signMaterial = new THREE.MeshStandardMaterial({ color: 0x2a2e3a, roughness: 0.3, metalness: 0.5 })
    const signMesh = new THREE.Mesh(signGeometry, signMaterial)
    signMesh.position.set(input.esign, input.Hsign, 0)
    signMesh.castShadow = true
    poleGroup.add(signMesh)

    const baseGeometry = new THREE.CylinderGeometry(input.Dpad / 2, input.Dpad / 2, input.hpad, 32)
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x9aa0a8, roughness: 0.8 })
    const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial)
    baseMesh.position.y = -input.hpad / 2
    baseMesh.receiveShadow = true
    poleGroup.add(baseMesh)

    const groundGeometry = new THREE.PlaneGeometry(80, 80)
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1f2e, roughness: 0.9 })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -input.hpad
    ground.receiveShadow = true
    scene.add(ground)
    scene.add(poleGroup)

    const windConeGeometry = new THREE.ConeGeometry(0.5, 3, 8)
    const windConeMaterial = new THREE.MeshBasicMaterial({ color: 0x1668d6, transparent: true, opacity: 0.3 })
    const windCone = new THREE.Mesh(windConeGeometry, windConeMaterial)
    windCone.rotation.x = -Math.PI / 2
    windCone.position.set(0, 5, -15)
    scene.add(windCone)

    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      const w = mountRef.current.clientWidth
      const h = mountRef.current.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [input, backgroundColor])

  useEffect(() => {
    if (!scene) return
    const poleGroup = scene.children.find(c => c.type === 'Group')
    if (poleGroup) {
      const targetRot = THREE.MathUtils.degToRad(-windDeg)
      poleGroup.rotation.y = THREE.MathUtils.lerp(poleGroup.rotation.y, targetRot, 0.1)
    }
  }, [windDeg, scene])

  return (
    <div className="tunnel-stage" ref={mountRef}>
      <div className="tunnel-canvas" />
      <div className="view-cube">
        <button>Top</button>
        <button>Front</button>
        <button>Side</button>
        <button>Iso</button>
      </div>
      <div className="tunnel-toolbar">
        <label className="toggle">
          <input type="checkbox" checked={truckOn} onChange={e => {}} disabled />
          Truck
        </label>
        <label>Truck speed <input type="range" min={0} max={40} step={1} value={truckSpeed} disabled /> <span className="unit">{truckSpeed} m/s</span></label>
        <label className="toggle">
          <input type="checkbox" /> 1:1 real
        </label>
        <span className="hint">Drag to orbit · scroll to zoom</span>
      </div>
      <div className="live-forces">
        <div className="lf-head"><span>Live on pole</span><em className="lf-tag">•••</em></div>
        <div className="lf-rows">
          {['V|m/s', 'q|kPa', 'V_base|kN', 'M_base|kN·m', 'δ_tip|mm'].map(row => {
            const [label, unit] = row.split('|')
            return (
              <div key={label} className="lf-row">
                <span>{label}</span>
                <b>-</b>
                <i>{unit}</i>
              </div>
            )
          })}
        </div>
      </div>
      <div className="speed-legend">
        <span>slow</span>
        <i />
        <span>fast</span>
      </div>
    </div>
  )
}

function WindTunnelView({ input, results, windSpeed, setWindSpeed, windDeg, setWindDeg, truckOn, setTruckOn, truckSpeed, setTruckSpeed }) {
  const [bgColor, setBgColor] = useState('#0a0f1a')

  return (
    <section className="wt-figure" style={{ gridColumn: '1 / -1' }}>
      <div className="tunnel-view">
        <WindTunnelStage input={input} windSpeed={windSpeed} windDeg={windDeg} truckOn={truckOn} truckSpeed={truckSpeed} backgroundColor={bgColor} />
        <div>
          <WindTunnelHUD input={input} results={results} windSpeed={windSpeed} setWindSpeed={setWindSpeed} windDeg={windDeg} setWindDeg={setWindDeg} />
          {truckOn && <TruckSlipstreamHUD truckSpeed={truckSpeed} />}
        </div>
      </div>
    </section>
  )
}

export default WindTunnelView