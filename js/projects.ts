document.getElementById("ifr-video").addEventListener('ended', function(e) {
  let video = e.target as HTMLMediaElement;
  video.currentTime = 0.0;
  video.play().then();
}, false);
