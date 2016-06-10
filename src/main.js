import init from './init';
import { updateControls } from './controls';

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
}
app = init();

document.getElementById('view').appendChild(app.renderer.domElement);
animate();

function animate() {
  var { camera, renderer, scene } = app;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  optionControls = updateControls(optionControls);
}
