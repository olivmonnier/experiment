import createMeshes from './meshes';

export default function() {
  //camera
  var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 400

  //controls
  var controls = new THREE.OrbitControls(camera);
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;

  //scene
  var scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xd8d0d1, 0, 950);

  //HemisphereLight
  var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
  scene.add(light);

  var axisHelper = new THREE.AxisHelper( 5 );
  scene.add( axisHelper );

  createMeshes(scene);

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
