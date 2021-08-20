document.getElementById("ferrari-video").addEventListener('ended', function(e) {
  e.target.currentTime = 0.25;
  e.target.play();
}, false);

document.getElementById("ifr-video").addEventListener('ended', function(e) {
  e.target.currentTime = 0.0;
  e.target.play();
}, false);
