refresh(thisRefresh);
function toggleDarkMode(): void {
  darkmode = darkmode !== true;
  saveDarkMode();
  refresh(thisRefresh);
}

function thisRefresh(): void {
  if (darkmode) {
    document.getElementById("dark-mode-toggle").innerText = "Light Mode";
  } else {
    document.getElementById("dark-mode-toggle").innerText = "Dark Mode";
  }
}
