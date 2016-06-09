export default function Cloud() {
  this.mesh = new THREE.Object3D();

  var geom = new THREE.BoxGeometry(20, 20, 20);
  var mat = new THREE.MeshPhongMaterial({
    color: 0xd8d0d1
  });

  var nBlocs = 3 + Math.floor(Math.random() * 3);
  for (var i = 0; i < nBlocs; i++) {
    var mesh = new THREE.Mesh(geom, mat);
    mesh.position.x = i * 15;
    mesh.position.y = Math.random() * 10;
    mesh.position.z = Math.random() * 10;
    mesh.rotation.y = Math.random() * Math.PI * 2;
    mesh.rotation.z = Math.random() * Math.PI * 2;

    var size = .1 + Math.random() * .9;
    mesh.scale.set(size, size, size);

    this.mesh.add(mesh);
  }
}
