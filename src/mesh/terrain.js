import Ground from './ground';

export default function Terrain(scene) {
  this.floor = [];
  this.tileWidth = 1000;
  this.tileHeight = 1000;

  var xPos = 0;
  for (var row = 0; row < 2; row++) {
    if (row === 0) {
      xPos = -this.tileWidth;
    } else if (row === 1) {
      xPos = 0;
    }

    for(var z = this.tileHeight; z > -this.tileHeight; z-=this.tileHeight) {
      var ground = new Ground(this.tileWidth, this.tileHeight);
      ground.mesh.rotation.x = -Math.PI/-2;
      ground.mesh.position.z = z;
      ground.mesh.position.y -= 4;
      ground.mesh.position.x = xPos;
      scene.add(ground.mesh);
      this.floor.push(ground.mesh);
    }
  }
}

Terrain.prototype.moveWithCamera = function(camera) {
  for (var i = 0; i < this.floor.length; i++) {
    if ((this.floor[i].position.z - this.tileHeight) > camera.position.z) {
      this.floor[i].position.z -= this.tileHeight * 2;
    } else if ((this.floor[i].position.z + this.tileHeight) < camera.position.z) {
      this.floor[i].position.z += this.tileHeight * 2;
    } else if ((this.floor[i].position.x - this.tileWidth) > camera.position.x) {
      this.floor[i].position.x -= this.tileWidth * 2;
    } else if ((this.floor[i].position.x + this.tileWidth) < camera.position.x) {
      this.floor[i].position.x += this.tileWidth * 2;
    }
  }
}
