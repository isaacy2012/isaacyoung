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
  let ret = localStorage["darkmode"];
  if (ret === undefined) {
    return false;
  }
  return JSON.parse(ret);
}

refresh();
thisRefresh();
function toggleDarkMode() {
  darkmode = darkmode !== true;
  saveDarkMode();
  refresh();
  thisRefresh();
}

function thisRefresh() {
  if (darkmode) {
    document.getElementById("dark-mode-toggle").innerText = "Light Mode";
    document.getElementById("profile-image").style.filter = "brightness(90%)";
  } else {
    document.getElementById("dark-mode-toggle").innerText = "Dark Mode";
    document.getElementById("profile-image").style.filter = "none";
  }
}
