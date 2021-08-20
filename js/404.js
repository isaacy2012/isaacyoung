document.addEventListener('keypress', keyPressed);

let messages = [
  "It worked on my machine...",
  "Have you tried turning it off and on again?",
  "It was working yesterday...",
  "It's not a bug, it's a feature...",
  "Are you using IE6?",
  "Segmentation Fault (core dumped)",
  "Indentation Error",
];
document.getElementById("excuse-text").innerText = "\"" + messages[Math.floor(Math.random() * messages.length)] + "\"";

function keyPressed(e) {
  let CHARCODE_COLON = 58;
  let KEYCODE_ESC = 27;
  if (e.charCode === CHARCODE_COLON) {
    let vimconsole = document.getElementById("vim-escape");
    vimconsole.focus();
  } else if (e.keyCode === KEYCODE_ESC) {
  }
}

document.onkeydown = function(e) {
  let KEYCODE_ESC = 27;
  e = e || window.event;
  let isEscape = false;
  if ("key" in e) {
    isEscape = (e.key === "Escape" || e.key === "Esc");
  } else {
    isEscape = (e.keyCode === KEYCODE_ESC);
  }
  if (isEscape) {
    resetConsole();
  }

  let KEYCODE_ENTER = 13;
  let isEnter = false;
  if ("key" in e) {
    isEnter = (e.key === "Enter");
  } else {
    isEnter = (e.keyCode === KEYCODE_ENTER);
  }
  if (isEnter) {
    console.log("was enter")
    let vimconsole = document.getElementById("vim-escape");
    if (vimconsole.value === ":q!") {
      window.location.href = "./index.html"
    }
    resetConsole();
  }

  if (e.keyCode === 8) {
    let vimconsole = document.getElementById("vim-escape");
    if (vimconsole.value === ":") {
      vimconsole.value = ": ";
    }
  }

};

function resetConsole() {
  let vimconsole = document.getElementById("vim-escape");
  vimconsole.blur();
  vimconsole.value = "";
}
