export default function Floor() {
  var geom = new THREE.PlaneGeometry(2000, 2000, 5, 5);
  geom.applyMatrix(new THREE.Matrix4().makeRotationX(- Math.PI/2));


  var mat = new THREE.MeshBasicMaterial({color: 0xd8d0d1 });

  this.mesh = new THREE.Mesh(geom, mat);
}
