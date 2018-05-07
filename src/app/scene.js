import * as WHS from 'whs'
import * as THREE from 'three'
import * as PHYSICS from 'physics-module-ammonext'

import {mobileCheck} from '/app/helpers'


export class Scene {
  constructor() {
    // check if it's a mobile device
    this.isMobile = mobileCheck()

    // create default setup parameters for the WHS app
    const appDefaults = {
      camera: {
        position: new THREE.Vector3(0, 10, 50),
        far: this.isMobile ? 200 : 1000
      },
      rendering: {
        bgColor: 0x162129,
        pixelRatio: this.isMobile ? false : window.devicePixelRatio,
        renderer: {
          antialias: !this.isMobile,
          shadowMap: {
            type: this.isMobile ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap
          }
        }
      },
      physics: {
        gravity: new THREE.Vector3(0, -10, 0),
        ammo: 'https://rawgit.com/WhitestormJS/physics-module-ammonext/master/vendor/ammo.js'
      }
    }

    // create the WHS app
    this.setup({useControls: true, ...appDefaults})

  }

  setup({camera, rendering, physics, useControls}) {
    // initialize the WHS app using the given parameters
    this.app = new WHS.App([
      new WHS.ElementModule(),
      new WHS.SceneModule(),
      new WHS.DefineModule('camera', new WHS.PerspectiveCamera(Object.assign(camera, {fov: 75}))),
      new WHS.RenderingModule(rendering, {shadow: true}),
      new PHYSICS.WorldModule(physics),
      useControls ? new WHS.OrbitControlsModule() : null,
      new WHS.ResizeModule()
    ])
  }

  start() {
    // start the simulation/animation
    this.app.start()
  }

  addAmbient(intensity) {
    // add ambient light
    new WHS.AmbientLight({
      intensity
    }).addTo(this.app)
  }

  addBasicLights(intensity = 0.5, position = [0, 10, 10], distance = 100, shadowmap) {
    // add basic lights
    this.addAmbient(intensity)

    return new WHS.PointLight({
      intensity,
      distance,

      shadow: Object.assign({
        fov: 90
      }, shadowmap),

      position
    }).addTo(this.app)
  }

  addPlane(size = 100) {
    // add a plane to the scene
    return new WHS.Plane({
      geometry: {
        width: size,
        height: size
      },

      modules: [
        new PHYSICS.PlaneModule({
          mass: 0
        })
      ],

      material: new THREE.MeshPhongMaterial({color: 0x447F8B}),

      rotation: {
        x: -Math.PI / 2
      }
    }).addTo(this.app)
  }

  addBoxPlane(size = 100, color = 0x447F8B) {
    // add a box plane to the scene
    return new WHS.Box({
      geometry: {
        width: size,
        height: 1,
        depth: size
      },

      modules: [
        new PHYSICS.BoxModule({
          mass: 0
        })
      ],

      material: new THREE.MeshPhongMaterial({color})
    }).addTo(this.app)
  }
}
