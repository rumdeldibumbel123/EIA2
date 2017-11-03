/*
Aufgabe 2: Skipiste mit Funktionen
Name: Daniel Sand
Matrikel: 256649
Datum: 22.10.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace L02 { // 
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0]; 
        crc2 = canvas.getContext("2d");

        //Himmel
        crc2.fillStyle = "#004ae0";
        crc2.fillRect(0, 0, 800, 600);

        //Berg2 (Hintergrund)
        crc2.fillStyle = "#666666";
        crc2.beginPath();
        crc2.moveTo(250, 100); //höhe
        crc2.lineTo(425, 450);
        crc2.lineTo(75, 450);
        crc2.fill();

        //Berg3 (Hintergrund)
        crc2.fillStyle = "#434343";
        crc2.beginPath();
        crc2.moveTo(450, 10); //höhe
        crc2.lineTo(625, 450);
        crc2.lineTo(275, 450);
        crc2.fill();

        //Skilift
        crc2.fillStyle = "424242"; //Seilbahn
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(800, 370);
        crc2.stroke();

        crc2.beginPath(); //Halteseil der Gondel
        crc2.moveTo(90, 130);
        crc2.lineTo(90, 150);
        crc2.stroke();

        crc2.fillStyle = "#303030";
        crc2.beginPath(); //Gondel
        crc2.moveTo(50, 135);
        crc2.lineTo(130, 160); //Dach der Gondel
        crc2.lineTo(130, 200); //Rechte Wand
        crc2.lineTo(50, 175); //Boden
        crc2.lineTo(50, 145); //Linke Wand
        crc2.fill();

        //Boden  
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 500, 800, 200);

        //Berg
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.moveTo(0, 230);
        crc2.lineTo(800, 500);
        crc2.lineTo(-800, 500);
        crc2.fill();


        // 10 Tannen an zufälliger Position zwischen 20 und 420 horizontal und 350 und 600 vertikal
        for (let i: number = 0; i < 10; i++) { // Zählschleife die bis 10 zählt.
            let x: number = 20 + Math.random() * 400;
            let y: number = 350 + Math.random() * 250;
            drawtree(x, y, "#004305");
        }

        drawtree(100, 300, "#004305"); // Lässt einen Baum mithilfe der Funktion "drawtree" automatisch erzeugen.
        drawtree(150, 300, "#004305");

        // Sonne an zufälliger Position zwischen 600 und 150 horizontal und 50 und 150 vertikal
        for (let i: number = 0; i < 1; i++) {
            let x: number = 600 + Math.random() * 150;
            let y: number = 50 + Math.random() * 150;
            drawsun(x, y, "#FFF800");
        }

        //Wolke 
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(700, 195, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(730, 185, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(760, 195, 30, 0, 2 * Math.PI);
        crc2.fill();

        // Schneeflocken an zufälliger Position zwischen 20 und 760 horizontal und 20 und 560 vertikal
        for (let i: number = 0; i < 50; i++) {
            let x: number = 20 + Math.random() * 760;
            let y: number = 20 + Math.random() * 560;
            drawstorm(x, y, "#FFFFFF");
        }
    }

    function drawstorm(_x: number, _y: number, _color: string): void {
        //Schneeflocken
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }

    function drawsun(_x: number, _y: number, _color: string): void {
        //Sonne
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 45, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
    }

    function drawtree(_x: number, _y: number, _color: string): void {
        //Tanne
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 10, _y + 0);
        crc2.lineTo(_x - 10, _y - 10);
        crc2.lineTo(_x - 20, _y - 10);
        crc2.lineTo(_x - 10, _y - 20);
        crc2.lineTo(_x - 20, _y - 20);
        crc2.lineTo(_x + 0, _y - 40);
        crc2.lineTo(_x + 20, _y - 20);
        crc2.lineTo(_x + 10, _y - 20);
        crc2.lineTo(_x + 20, _y - 10);
        crc2.lineTo(_x - 10, _y - 10);
        crc2.lineTo(_x + 10, _y - 10);
        crc2.lineTo(_x + 10, _y + 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }

}


