let darkmode = loadDarkMode();

function refresh() {
  let element = document.body;
  if (darkmode === true) {
    element.classList.add("dark-mode");
  } else {
    element.classList.remove("dark-mode");
  }
}

function saveDarkMode() {
  localStorage["darkmode"] = JSON.stringify(darkmode);
}

function loadDarkMode() {
  let ret = JSON.parse(localStorage["darkmode"]);
  if (ret === undefined) {
    return "false";
  }
  return ret;
}

refresh();
