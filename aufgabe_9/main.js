/*
Aufgabe 8: Div Elemente
Name: Daniel Sand
Matrikel: 256649
Datum: 05.12.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var L09_DOM;
(function (L09_DOM) {
    window.addEventListener("load", init); // Kontrolliert ob die DOM Datei geladen ist.
    var buchstaben = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"; //  
    var div;
    var dataArray = buchstaben.split(",");
    var safeDiv; // Speichert den ausgew�hlten Buchstaben.
    function init() {
        for (var i = 0; i < dataArray.length; i++) {
            draw(i);
        }
        drawFlaeche();
    }
    document.addEventListener("keydown", tastenDruck); // �berpr�ft im gesamten Dokument ob eine Taste gedr�ckt wird.
    function tastenDruck(_event) {
        console.log(_event.key);
        var div = document.getElementById("" + _event.key); // ID wurde in draw Funktion definiert.
        if (safeDiv) {
            safeDiv.style.backgroundColor = "black";
        }
        safeDiv = div;
        div.style.backgroundColor = "red";
    }
    function draw(i) {
        div = document.createElement("div"); // Ein neues DIV Element wird generiert. Die Leiste oben mit den Buchstaben.
        div.addEventListener("click", handle); // Wenn etwas geklickt wird, wird Funktion "handle" ausgef�hrt".
        div.style.width = "0.5em";
        div.id = "" + dataArray[i];
        div.style.backgroundColor = "black";
        div.style.color = "white";
        div.style.marginLeft = "0.5em";
        div.style.fontSize = "1.5em";
        div.style.textAlign = "center";
        div.style.cssFloat = "left";
        div.style.padding = "0.5em";
        div.innerHTML = dataArray[i];
        document.body.appendChild(div); // Erstellt des neue DIV im DOM.
    }
    function drawFlaeche() {
        div = document.createElement("div");
        div.addEventListener("click", write);
        div.style.width = "90%";
        div.style.height = "50vh";
        div.style.marginTop = "7em";
        div.style.marginLeft = "5%";
        div.style.backgroundColor = "white";
        div.style.border = "1px solid black";
        div.style.position = "absolute";
        document.body.appendChild(div);
    }
    function handle(_event) {
        if (safeDiv) {
            safeDiv.style.backgroundColor = "black";
        }
        var div = _event.target; // target = aktuelle Auswahl.
        safeDiv = _event.target;
        div.style.backgroundColor = "red";
    }
    function write(_event) {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "" + (_event.clientY - 20) + "px"; // Zwei "" lassen Operation in string umwandeln.
        div.style.left = "" + (_event.clientX - 20) + "px"; // "client" ist die Maus bzw. die Position an der Sie klickt.
        div.style.width = "0.5em";
        div.style.color = "white";
        div.style.textAlign = "center";
        div.style.padding = "0.5em";
        div.style.fontSize = "1.5em";
        div.style.backgroundColor = "hsl( " + Math.random() * 360 + ",100%,20%)";
        div.innerHTML = safeDiv.innerHTML; // Greift auf den in der "handle" Funktion gespeicherten Buchstaben zur�ck.
        div.addEventListener("click", deleteBuch);
        document.body.appendChild(div); // Schreibt die FUnktion.
    }
    function deleteBuch(_event) {
        if (_event.altKey) {
            var div_1 = _event.target;
            document.body.removeChild(div_1); // L�scht ausgew�hltes DIV wieder.
        }
    }
})(L09_DOM || (L09_DOM = {}));
