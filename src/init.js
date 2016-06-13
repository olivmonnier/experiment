import { initPointerLock } from './pointerLock';
import { initControls } from './controls';

export default function() {
  initControls();
  initPointerLock();

  //camera
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.y = 10;

  //scene
  var scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xd8d0d1, 0, 950);

  //controls
  var controls = new THREE.PointerLockControls(camera);
  scene.add(controls.getObject());

  //HemisphereLight
  var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
  scene.add(light);

  var axisHelper = new THREE.AxisHelper( 5 );
  scene.add( axisHelper );

  //WebGL Renderer
  var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setClearColor( 0xffffff );
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }, false);

  return {
    camera,
    controls,
    scene,
    light,
    renderer
  }
}
