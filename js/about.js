var keys = {};
keys["c"] = new Audio("./sounds/c.mp3");
keys["cd"] = new Audio("./sounds/cd.mp3");
keys["d"] = new Audio("./sounds/d.mp3");
keys["de"] = new Audio("./sounds/de.mp3");
keys["e"] = new Audio("./sounds/e.mp3");
keys["f"] = new Audio("./sounds/f.mp3");
keys["fg"] = new Audio("./sounds/fg.mp3");
keys["g"] = new Audio("./sounds/g.mp3");
keys["ga"] = new Audio("./sounds/ga.mp3");
keys["a"] = new Audio("./sounds/a.mp3");
keys["ab"] = new Audio("./sounds/ab.mp3");
keys["b"] = new Audio("./sounds/b.mp3");
document.getElementById("ferrari-video").addEventListener('ended', function (e) {
    var video = e.target;
    video.currentTime = 0.25;
    video.play().then();
}, false);
var _loop_1 = function (element) {
    element.addEventListener('mousedown', function (_) {
        var key = keys[element.id];
        key.currentTime = 0;
        key.play().then();
    }, false);
};
// @ts-ignore
for (var _i = 0, _a = document.getElementsByClassName("piano-key"); _i < _a.length; _i++) {
    var element = _a[_i];
    _loop_1(element);
}
//# sourceMappingURL=about.js.map