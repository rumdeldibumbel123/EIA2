/*
Aufgabe 8: Div Elemente
Name: Daniel Sand
Matrikel: 256649
Datum: 05.12.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var L07_DOM;
(function (L07_DOM) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", keypress);
    function keypress(_event) {
        console.log(_event.keyCode);
    }
    function init() {
        for (var i = 0; i < 200; i++) {
            var div = document.createElement("div");
            //console.log(h);
            div.style.width = "40px";
            div.style.height = "40px";
            div.style.left = Math.random() * 1920 + "px";
            div.style.top = Math.random() * 1080 + "px";
            div.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            document.body.appendChild(div);
        }
    }
})(L07_DOM || (L07_DOM = {}));
