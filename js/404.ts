document.addEventListener('keypress', keyPressed);

let messages: Array<string> = [
  "It worked on my machine...",
  "Have you tried turning it off and on again?",
  "It was working yesterday...",
  "It's not a bug, it's a feature...",
  "Are you using IE6?",
  "Segmentation Fault (core dumped)",
  "Indentation Error",
];

document.getElementById("excuse-text").innerText = "\"" + messages[Math.floor(Math.random() * messages.length)] + "\"";

function keyPressed(e): void {
  let CHARCODE_COLON: number = 58;
  if (e.charCode === CHARCODE_COLON) {
    let vimconsole = document.getElementById("vim-escape");
    vimconsole.focus();
  }
}

document.onkeydown = function(e): void {
  let KEYCODE_ESC = 27;
  // @ts-ignore
  e = e || window.event;
  let isEscape = false;
  if ("key" in e) {
    isEscape = (e.key === "Escape" || e.key === "Esc");
  } else {
    // @ts-ignore
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
    // @ts-ignore
    isEnter = (e.keyCode === KEYCODE_ENTER);
  }
  if (isEnter) {
    console.log("was enter")
    let vimconsole = document.getElementById("vim-escape") as HTMLInputElement;
    if (vimconsole.value === ":q!") {
      window.location.href = "./index.html"
    }
    resetConsole();
  }

  let KEYCODE_BACKSPACE = 8;
  if (e.keyCode === KEYCODE_BACKSPACE) {
    let vimconsole = document.getElementById("vim-escape") as HTMLInputElement;
    if (vimconsole.value === ":") {
      vimconsole.value = ": ";
    }
  }

};

function resetConsole(): void {
  let vimconsole = document.getElementById("vim-escape") as HTMLInputElement;
  vimconsole.blur();
  vimconsole.value = "";
}
