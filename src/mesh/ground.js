export default function Ground(width, height) {
  var geom = new THREE.PlaneGeometry(width, height, 300, 300);
  var mat = new THREE.MeshBasicMaterial({color: 0xd8d0d1, side: THREE.DoubleSide });
  var ground = new THREE.Mesh(geom, mat);

  ground.position.y = -1.9; //lower it
  ground.doubleSided = true;

  // for(var i = 0, l = geom.vertices.length; i < l; i++ ) {
  //   var vertex = geom.vertices[i];
  //   var value = pn.noise(vertex.x / 10, vertex.y / 10, 0);
  //   vertex.z = value * 10;
  // }

  geom.computeFaceNormals();
  geom.computeVertexNormals(true);

  var bufferGeometry = new THREE.BufferGeometry().fromGeometry(geom);

  this.mesh = new THREE.Mesh(bufferGeometry, mat);
}
