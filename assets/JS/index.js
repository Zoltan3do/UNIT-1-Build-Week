const checkmark = document.querySelector(".material-symbols-outlined");
const bottone = document.getElementById("start");
const rudeCheckbox = document.querySelector("#rude-checkbox");

window.addEventListener("load", init());
function init() {
    initStyles();
}

function initStyles() {
    checkmark.style.display = "none";
    bottone.setAttribute("disabled", "true");
    bottone.style.cursor = "auto";
    bottone.style.opacity = 0.6
}

function checkbox() {
    checkmark.style.display = "inline-block";
    bottone.setAttribute("disabled", "false");
    bottone.style.cursor = "pointer";
    bottone.style.opacity = 1
    rudeCheckbox.style.color = "#c2138e";

}

// variabile di stato
let togglestate = true;
rudeCheckbox.addEventListener("click", function () {
    if (togglestate) {
        checkbox();
    } else {
        initStyles()
    }
    togglestate = !togglestate;
});

function cambiaPagina() {
    window.location.href = "test.html";
}
