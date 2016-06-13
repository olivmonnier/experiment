import init from './init';
import { updateControls } from './controls';
import Sky from './mesh/sky';
import Terrain from './mesh/terrain';

var date = new Date();

window.app = {},
window.optionControls = {
  controlsEnabled: false,
  moveForward: false,
  moveBackward: false,
  moveLeft: false,
  moveRight: false,
  canJump: false,
  clock: new THREE.Clock(),
  velocity: new THREE.Vector3(),
  raycaster: new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 )
},
window.pn = new Perlin('rnd' + date.getTime());

app = init();
var sky = new Sky();
app.scene.add(sky.mesh);
var terrain = new Terrain(app.scene);

document.getElementById('view').appendChild(app.renderer.domElement);
animate();

function animate() {
  var { camera, controls, renderer, scene } = app;
  requestAnimationFrame(animate);
  terrain.moveWithCamera(controls.getObject());
  renderer.render(scene, camera);
  optionControls = updateControls(optionControls);
}
