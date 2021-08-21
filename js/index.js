refresh(thisRefresh);
function toggleDarkMode() {
    darkmode = darkmode !== true;
    saveDarkMode();
    refresh(thisRefresh);
}
function thisRefresh() {
    if (darkmode) {
        document.getElementById("dark-mode-toggle").innerText = "Light Mode";
    }
    else {
        document.getElementById("dark-mode-toggle").innerText = "Dark Mode";
    }
}
//# sourceMappingURL=index.js.map