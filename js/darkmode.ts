let darkmode: boolean = loadDarkMode();

function refresh(thatRefresh: Function): void {
  if (darkmode === true) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  // @ts-ignore
  for(let element: HTMLElement of document.getElementsByClassName("dark-toggle")) {
    if (darkmode === true) {
      element.classList.add("dark-mode");
    } else {
      element.classList.remove("dark-mode");
    }
  }

  thatRefresh();
}

function loadDarkMode(): boolean {
  let ret: string = localStorage["darkmode"];
  if (ret === undefined) {
    return false;
  }
  return JSON.parse(ret);
}

function saveDarkMode(): void {
  localStorage["darkmode"] = JSON.stringify(darkmode);
}

refresh(() => void 0);
