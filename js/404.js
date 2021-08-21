document.addEventListener('keypress', keyPressed);
var messages = [
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
    var CHARCODE_COLON = 58;
    if (e.charCode === CHARCODE_COLON) {
        var vimconsole = document.getElementById("vim-escape");
        vimconsole.focus();
    }
}
document.onkeydown = function (e) {
    var KEYCODE_ESC = 27;
    // @ts-ignore
    e = e || window.event;
    var isEscape = false;
    if ("key" in e) {
        isEscape = (e.key === "Escape" || e.key === "Esc");
    }
    else {
        // @ts-ignore
        isEscape = (e.keyCode === KEYCODE_ESC);
    }
    if (isEscape) {
        resetConsole();
    }
    var KEYCODE_ENTER = 13;
    var isEnter = false;
    if ("key" in e) {
        isEnter = (e.key === "Enter");
    }
    else {
        // @ts-ignore
        isEnter = (e.keyCode === KEYCODE_ENTER);
    }
    if (isEnter) {
        console.log("was enter");
        var vimconsole = document.getElementById("vim-escape");
        if (vimconsole.value === ":q!") {
            window.location.href = "./index.html";
        }
        resetConsole();
    }
    var KEYCODE_BACKSPACE = 8;
    if (e.keyCode === KEYCODE_BACKSPACE) {
        var vimconsole = document.getElementById("vim-escape");
        if (vimconsole.value === ":") {
            vimconsole.value = ": ";
        }
    }
};
function resetConsole() {
    var vimconsole = document.getElementById("vim-escape");
    vimconsole.blur();
    vimconsole.value = "";
}
//# sourceMappingURL=404.js.map