import init from './init';

function animate() {
  var { camera, controls, renderer, scene } = app;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}


var app = init();

document.getElementById('view').appendChild(app.renderer.domElement);
animate();
