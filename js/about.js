document.getElementById("ferrari-video").addEventListener('ended', function(e) {
  e.target.currentTime = 0.3;
  e.target.play();
}, false);
