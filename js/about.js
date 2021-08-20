let keys = {};
keys["c"] = new Audio("./sounds/c.mp3")
keys["cd"] = new Audio("./sounds/cd.mp3")
keys["d"] = new Audio("./sounds/d.mp3")
keys["de"] = new Audio("./sounds/de.mp3")
keys["e"] = new Audio("./sounds/e.mp3")
keys["f"] = new Audio("./sounds/f.mp3")
keys["fg"] = new Audio("./sounds/fg.mp3")
keys["g"] = new Audio("./sounds/g.mp3")
keys["ga"] = new Audio("./sounds/ga.mp3")
keys["a"] = new Audio("./sounds/a.mp3")
keys["ab"] = new Audio("./sounds/ab.mp3")
keys["b"] = new Audio("./sounds/b.mp3")

document.getElementById("ferrari-video").addEventListener('ended', function (e) {
  e.target.currentTime = 0.25;
  e.target.play();
}, false);


for (let element of document.getElementsByClassName("piano-key")) {
  element.addEventListener('mousedown', function (_) {
    let key = keys[element.id];
    key.currentTime = 0;
    key.play();
  }, false);
}
