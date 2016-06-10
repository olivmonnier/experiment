function checkForPointerLock() {
  return 'pointerLockElement' in document ||
         'mozPointerLockElement' in document ||
         'webkitPointerLockElement' in document;
}

function initPointerLock() {
  var el = document.body;
  var havePointerLock = checkForPointerLock();

  if (havePointerLock) {
    var pointerlockchange = function (event) {
      if (document.pointerLockElement === el ||
          document.mozPointerLockElement === el ||
          document.webkitPointerLockElement === el) {
        optionControls.controlsEnabled = true;
        app.controls.enabled = true;
      } else {
        optionControls.controlsEnabled = false
        app.controls.enabled = false;
      }
    };

    var pointerlockerror = function (event) {
      el.innerHTML = 'PointerLock Error';
    };

    document.addEventListener('pointerlockchange', pointerlockchange, false);
    document.addEventListener('mozpointerlockchange', pointerlockchange, false);
    document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

    document.addEventListener('pointerlockerror', pointerlockerror, false);
    document.addEventListener('mozpointerlockerror', pointerlockerror, false);
    document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

    var requestPointerLock = function(event) {
      el.requestPointerLock = el.requestPointerLock || el.mozRequestPointerLock || el.webkitRequestPointerLock;
      el.requestPointerLock();
    };

    el.addEventListener('click', requestPointerLock, false);
  } else {
    el.innerHTML = 'Bad browser; No pointer lock';
  }
}

export {
  checkForPointerLock,
  initPointerLock
}
