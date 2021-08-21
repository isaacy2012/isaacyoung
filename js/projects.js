document.getElementById("ifr-video").addEventListener('ended', function (e) {
    var video = e.target;
    video.currentTime = 0.0;
    video.play().then();
}, false);
//# sourceMappingURL=projects.js.map