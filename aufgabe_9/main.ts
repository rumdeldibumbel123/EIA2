/*
Aufgabe 8: Div Elemente
Name: Daniel Sand
Matrikel: 256649
Datum: 05.12.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace L9_Erpresser {
    window.addEventListener("load", init);

    let currentLetter: string;

    document.addEventListener("keydown", keyboardPress);
    

    function init(): void {

        //Array für das Alphabet
        let buchstaben: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        let anzahl: number = buchstaben.length;

        if (anzahl == buchstaben.length) {
            for (let i: number = 0; i < buchstaben.length; i++) {
                drawSquare(buchstaben[i]);
            }
        }
        drawLetter();
    }

    function drawSquare(_buchstaben: string): void {

        let square: HTMLDivElement = document.createElement("div");

        square.style.width = "30px";
        square.style.height = "30px";
        square.style.backgroundColor = "black";
        square.innerText = _buchstaben;
        square.style.marginLeft = "3px";
        square.style.marginTop = "3px";
        square.id = _buchstaben;
        square.className = "letters";


        square.addEventListener("click", handleClick);
        document.body.appendChild(square);

    }

    function drawLetter(): void {

        let letter: HTMLDivElement = document.createElement("div");

        letter.style.width = "855px";
        letter.style.height = "300px";
        letter.style.backgroundColor = "grey";
        letter.style.border = "3px dotted black";
        letter.style.marginLeft = "3px";
        letter.style.marginTop = "10px";

        letter.addEventListener("click", putLetter);
        document.body.appendChild(letter);

    }

    function handleClick(_event: MouseEvent): void {
        let click: HTMLDivElement = <HTMLDivElement>_event.target;
        click.style.backgroundColor = "pink";

        currentLetter = click.id;

        let divlist: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letters");

        for (let i: number = 0; i < divlist.length; i++) {
            if (currentLetter != divlist[i].id) {
                divlist[i].style.backgroundColor = "black";
            }
        }


    }

    function keyboardPress(event: KeyboardEvent): void {
        if (event.key == "a" || event.key == "A") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "b" || event.key == "B") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "c" || event.key == "C") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "d" || event.key == "D") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "e" || event.key == "E") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "f" || event.key == "F") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "g" || event.key == "G") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "h" || event.key == "H") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "i" || event.key == "I") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "j" || event.key == "J") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "k" || event.key == "K") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "l" || event.key == "L") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "m" || event.key == "M") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "n" || event.key == "N") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "o" || event.key == "O") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "p" || event.key == "P") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "q" || event.key == "Q") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "r" || event.key == "R") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "s" || event.key == "S") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "t" || event.key == "T") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "u" || event.key == "U") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "v" || event.key == "V") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "w" || event.key == "W") {
            currentLetter = event.key;
            putLetter;
        }


        else if (event.key == "x" || event.key == "X") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "y" || event.key == "Y") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "z" || event.key == "Z") {
            currentLetter = event.key;
            putLetter;
        }

    }


    function putLetter(_event: MouseEvent): void {
        let box: HTMLDivElement = document.createElement("div");

        box.style.width = "30px";
        box.style.height = "30px";
        box.style.backgroundColor = "black";
        box.innerText = currentLetter;
        box.style.marginLeft = "3px";
        box.style.marginTop = "3px";
        box.id = currentLetter;
        box.className = "letters";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";


        box.addEventListener("click", deleteLetter);

        document.body.appendChild(box);


        let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }

    

    function deleteLetter(_event: MouseEvent): void {

        if (_event.altKey == false) {
            return;
            }

        if (_event.altKey == true) {
                let d: HTMLDivElement = <HTMLDivElement>_event.target;
                document.body.removeChild(d);
            }
        
    }


    }