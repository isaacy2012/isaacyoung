let darkmode = loadDarkMode();

function refresh() {
  let element = document.body;
  if (darkmode === true) {
    element.classList.add("dark-mode");
  } else {
    element.classList.remove("dark-mode");
  }

  for(element of document.getElementsByClassName("dark-toggle")) {
    if (darkmode === true) {
      element.classList.add("dark-mode");
    } else {
      element.classList.remove("dark-mode");
    }
  }
}

function loadDarkMode() {
  let ret = localStorage["darkmode"];
  if (ret === undefined) {
    return false;
  }
  return JSON.parse(ret);
}

refresh();
