var name = prompt("Name");
function init() {
    var node = document.getElementById("inhalt");
    if (name.length < 1) {
        node.innerHTML = "Bitte vollst�ndigen Namen eingeben:";
    }
    if (name.length >= 1) {
        node.innerHTML = "Jetzt wei� ich das du " + name + " heist.";
    }
}
window.addEventListener("load", init);
