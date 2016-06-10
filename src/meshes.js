import Floor from './mesh/floor';
import Sky from './mesh/sky';

export default function(scene) {
  var sky = new Sky();
  scene.add(sky.mesh);

  var floor = new Floor();
  scene.add(floor.mesh);
}
