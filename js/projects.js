document.getElementById("ifr-video").addEventListener('ended', function(e) {
  e.target.currentTime = 0.0;
  e.target.play();
}, false);
