function checkMedia(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 1200px)")
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    checkMedia(x);
  });
