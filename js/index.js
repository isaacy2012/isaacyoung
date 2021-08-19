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
