import * as WHS from 'whs'
import * as THREE from 'three'
import * as PHYSICS from 'physics-module-ammonext'
import {Scene} from '/app/scene'

// create a scene instance
const scene = new Scene()

// app colors
const colors = {
  background: 0x162129,
  plane: 0x447F8B,
  mesh: 0xF2F2F2,
  softbody: 0x434B7F
}

// create a box
const addBox = () => {
  const box = new WHS.Box({ // Create sphere comonent.
    geometry: [2, 2, 2],

    modules: [
      new PHYSICS.BoxModule({
        mass: 10 // Mass of physics object.
      })
    ],

    material: new THREE.MeshLambertMaterial({
      color: colors.mesh
    }),

    position: [10, 10, 20]
  })

  box.addTo(scene.app)

  return box
}

setInterval(() => {
  for (let i = 0; i < 20; i++) {
    const box = addBox()
    setTimeout(() => scene.app.remove(box), 5000)
  }
}, 1000)

// add a ground (plane)
scene.addPlane()

// add lights
scene.addBasicLights()

// start animations and physics simulation
scene.start()
