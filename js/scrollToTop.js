//Get the button:
var toTopButton = document.getElementById("toTopButton");
var container = document.getElementById("container");
var thresh = window.innerHeight * 0.2;
// When the user scrolls down 20px from the top of the document, show the button
container.onscroll = function () { containerScrollFunction(); };
document.body.onscroll = function () { bodyScrollFunction(); };
function containerScrollFunction() {
    console.log("container: " + container.scrollTop);
    if (container.scrollTop > thresh || document.body.scrollTop > thresh || document.documentElement.scrollTop > thresh) {
        toTopButton.style.height = "auto";
        toTopButton.style.opacity = "1";
    }
    else {
        toTopButton.style.height = "0";
        toTopButton.style.opacity = "0";
    }
}
function bodyScrollFunction() {
    console.log("body: " + container.scrollTop);
    if (document.body.scrollTop > thresh || document.documentElement.scrollTop > thresh) {
        toTopButton.style.height = "auto";
        toTopButton.style.opacity = "1";
    }
    else {
        toTopButton.style.height = "0";
        toTopButton.style.opacity = "0";
    }
}
// When the user clicks on the button, scroll to the top of the document
function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//# sourceMappingURL=scrollToTop.js.map