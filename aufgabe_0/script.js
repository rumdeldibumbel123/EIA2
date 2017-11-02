/*
Aufgabe 0: Miniseite
Name: Daniel Sand
Matrikel: 256649
Datum: 15.10.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
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
