/*
Aufgabe 8: Div Elemente
Name: Daniel Sand
Matrikel: 256649
Datum: 05.12.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace L09_DOM {
    window.addEventListener("load", init); // Kontrolliert ob die DOM Datei geladen ist.
    let buchstaben: string = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"; //  
    let div: HTMLDivElement;
    let dataArray: string[] = buchstaben.split(",");
    let safeDiv: HTMLDivElement; // Speichert den ausgewählten Buchstaben.
    function init() {
        for (let i: number = 0; i < dataArray.length; i++) {
            draw(i);
        }
        drawFlaeche();

    }

    document.addEventListener("keydown", tastenDruck); // Überprüft im gesamten Dokument ob eine Taste gedrückt wird.

    function tastenDruck(_event: KeyboardEvent): void {
        console.log(_event.key);
        let div:HTMLDivElement= <HTMLDivElement>document.getElementById(""+_event.key); // ID wurde in draw Funktion definiert.

                if (safeDiv) {
                    safeDiv.style.backgroundColor = "black";
                }

            safeDiv = div;
            div.style.backgroundColor = "red";
        }

        function draw(i: number) { // Buchstabenleiste

            div = document.createElement("div"); // Ein neues DIV Element wird generiert. Die Leiste oben mit den Buchstaben.
            div.addEventListener("click", handle); // Wenn etwas geklickt wird, wird Funktion "handle" ausgeführt".
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
        function drawFlaeche() { // Fläche in der die Buchstaben erscheinen.
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
        function handle(_event: MouseEvent): void { // Frägt ab ob in safediv bereits etwas gespeichert ist.
            if (safeDiv) {
                safeDiv.style.backgroundColor = "black";
            }
            let div: HTMLDivElement = <HTMLDivElement>_event.target; // target = aktuelle Auswahl.
            safeDiv = <HTMLDivElement>_event.target;
            div.style.backgroundColor = "red";
        }
        function write(_event: MouseEvent): void { // Funktion "write" wird aufgerufen wenn mit der Maus in das Feld geklickt wird.

            let div: HTMLDivElement = document.createElement("div");
            div.style.position = "absolute";
            div.style.top = "" + (_event.clientY - 20) + "px"; // Zwei "" lassen Operation in string umwandeln.
            div.style.left = "" + (_event.clientX - 20) + "px"; // "client" ist die Maus bzw. die Position an der Sie klickt.
            div.style.width = "0.5em";
            div.style.color = "white";
            div.style.textAlign = "center";
            div.style.padding = "0.5em";
            div.style.fontSize = "1.5em";
            div.style.backgroundColor = "hsl( " + Math.random() * 360 + ",100%,20%)";
            div.innerHTML = safeDiv.innerHTML; // Greift auf den in der "handle" Funktion gespeicherten Buchstaben zurück.
            div.addEventListener("click", deleteBuch);
            document.body.appendChild(div); // Schreibt die FUnktion.
        }
    function deleteBuch(_event: MouseEvent){
        if(_event.altKey){ // Überprüft ob Alt Taste Gedrückt ist.
        let div: HTMLDivElement = <HTMLDivElement>_event.target;
        document.body.removeChild(div); // Löscht ausgewähltes DIV wieder.
            }
        }
}