function initControls() {
  document.addEventListener('keydown', onKeyDown, false);
  document.addEventListener('keyup', onKeyUp, false);
}

function onKeyDown(e) {
  switch (e.keyCode) {
    case 38: // up
    case 87: // w
      optionControls.moveForward = true;
      break;
    case 37: // left
    case 65: // a
      optionControls.moveLeft = true;
      break;
    case 40: // down
    case 83: // s
      optionControls.moveBackward = true;
      break;
    case 39: // right
    case 68: // d
      optionControls.moveRight = true;
      break;
    case 32: // space
      if (optionControls.canJump === true) optionControls.velocity.y += 350;
      optionControls.canJump = false;
      break;
  }
}

function onKeyUp(e) {
  switch(e.keyCode) {
    case 38: // up
    case 87: // w
      optionControls.moveForward = false;
      break;
    case 37: // left
    case 65: // a
      optionControls.moveLeft = false;
      break;
    case 40: // down
    case 83: // s
      optionControls.moveBackward = false;
      break;
    case 39: // right
    case 68: // d
      optionControls.moveRight = false;
      break;
  }
}

function updateControls(optionControls) {
  var { controlsEnabled, raycaster, clock, velocity, moveForward, moveBackward, moveLeft, moveRight, canJump } = optionControls;

  if (controlsEnabled) {
    raycaster.ray.origin.copy( app.controls.getObject().position );
    raycaster.ray.origin.y -= 10;

    var delta = clock.getDelta();
    var walkingSpeed = 800.0;

    velocity.x -= velocity.x * 10.0 * delta;
    velocity.y -= 9.8 * 100.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    if (moveForward) velocity.z -= walkingSpeed * delta;
    if (moveBackward) velocity.z += walkingSpeed * delta;
    if (moveLeft) velocity.x -= walkingSpeed * delta;
    if (moveRight) velocity.x += walkingSpeed * delta;

    app.controls.getObject().translateX(velocity.x * delta);
    app.controls.getObject().translateY(velocity.y * delta);
    app.controls.getObject().translateZ(velocity.z * delta);

    if (app.controls.getObject().position.y < 10) {
      velocity.y = 0;
      app.controls.getObject().position.y = 10;
      canJump = true;
    }
  }
  return {
    canJump,
    clock,
    controlsEnabled,
    moveForward,
    moveBackward,
    moveLeft,
    moveRight,
    raycaster,
    velocity
  }
}

export {
  initControls,
  updateControls
}
