import Sky from './mesh/sky';

export default function(scene) {
  var sky = new Sky();
  scene.add(sky.mesh);
}
