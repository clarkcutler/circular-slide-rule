document.onmousedown = function(e) {
  // register start location
  document.onmousemove = function(e) {
    console.log('mousemove')
    // figure out angle to rotate based on start location
    // grab a group with all the elements we care about (TODO create that g element)
    //   and set its rotate transform
  }
}

document.onmouseup = function() {
  document.onmousemove = null;
}
