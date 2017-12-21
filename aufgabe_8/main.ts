/*
Aufgabe 8: Div Elemente
Name: Daniel Sand
Matrikel: 256649
Datum: 05.12.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace L08_DOM {
    window.addEventListener("load", init); // Lädt die Init Funktion

        function init(): void {
        var anzahl: string = prompt("Wähle eine Anzahl zwischen 10 und 100 Quadraten aus die erstellt werden soll."); // "promt" = Fenster das eine Eingabe zulässt.
        var anzahlnummer: number = parseInt(anzahl); //Eingabe von String in Number umwandeln
        if (anzahlnummer >= 10 && anzahlnummer <= 100) { //wenn Eingabe über o. gleich 10 oder unter/gl. 100 ist...
            for (var i: number = 0; i < anzahlnummer; i++) {
                draw (); //Funktionsaufruf, Parameter werden übergeben
            }
        } else {
            window.alert("Lies nochmal genauer. Das war die falsche Eingabe.)"); //Bei falscher Eingabe.
            init(); //Funktionsaufruf um Eingabe einer Zahl neu zu starten.
        }
}

    function draw(): void {
            let div: HTMLElement = document.createElement("div");
            div.style.width = "40px";
            div.style.height = "40px";
            div.style.left = Math.random() * 1920 + "px";
            div.style.top = Math.random() * 1080 + "px";
            div.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            document.body.appendChild(div);
    }
}