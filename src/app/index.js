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

// create a sphere to test the physic
const sphere = new WHS.Sphere({ // Create sphere comonent.
  geometry: {
    radius: 3,
    widthSegments: 32,
    heightSegments: 32
  },

  modules: [
    new PHYSICS.SphereModule({
      mass: 10 // Mass of physics object.
    })
  ],

  material: new THREE.MeshLambertMaterial({
    color: colors.mesh
  }),

  position: [0, 100, 0]
})

// create a box
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

  position: [2, -3, 2]
})

// link the box to the sphere
box.addTo(sphere)

// add the sphere to the WHS application
sphere.addTo(scene.app)

// add a ground (plane)
scene.addPlane()

// add lights
scene.addBasicLights()

// start animations and physics simulation
scene.start()
