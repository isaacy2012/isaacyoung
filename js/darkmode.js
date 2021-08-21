var darkmode = loadDarkMode();
function refresh(thatRefresh) {
    if (darkmode === true) {
        document.body.classList.add("dark-mode");
    }
    else {
        document.body.classList.remove("dark-mode");
    }
    // @ts-ignore
    for (var _i = 0, _a = document.getElementsByClassName("dark-toggle"); _i < _a.length; _i++) {
        var element = _a[_i];
        if (darkmode === true) {
            element.classList.add("dark-mode");
        }
        else {
            element.classList.remove("dark-mode");
        }
    }
    thatRefresh();
}
function loadDarkMode() {
    var ret = localStorage["darkmode"];
    if (ret === undefined) {
        return false;
    }
    return JSON.parse(ret);
}
function saveDarkMode() {
    localStorage["darkmode"] = JSON.stringify(darkmode);
}
refresh(function () { return void 0; });
//# sourceMappingURL=darkmode.js.map