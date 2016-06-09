import Cloud from './cloud';

export default function Sky() {
  this.mesh = new THREE.Object3D();
  this.nClouds = 400;

  for(var i = 0; i < this.nClouds; i++) {
    var cloud = new Cloud();

    cloud.mesh.position.x = Math.floor(Math.random() * 20001) - 10000;
    cloud.mesh.position.y = 1000;
    cloud.mesh.position.z = Math.floor(Math.random() * 20001) - 10000;

    var size = 1 + Math.random() * 4;
    cloud.mesh.scale.set(size, size, size);

    this.mesh.add(cloud.mesh);
  }
}
