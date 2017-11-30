/*
Aufgabe 6: Skipiste mit Superklassen
Name: Daniel Sand
Matrikel: 256649
Datum: 17.11.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace L06_Class {
    export let crc2: CanvasRenderingContext2D;
    
    let move: Move[] = [];
    
    window.addEventListener("load", init);
    
    var hintergrund: any;

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
        
        // Fest definierte Elemente

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

        //Skipiste
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.moveTo(0, 230);
        crc2.lineTo(800, 500);
        crc2.lineTo(-800, 500);
        crc2.fill();
        
                // 10 Tannen an zufälliger Position zwischen 20 und 420 horizontal und 350 und 600 vertikal
        for (let i: number = 0; i < 3; i++) {
            let x: number = 20 + Math.random() * 200;
            let y: number = 350 + Math.random() * 250;
            drawtree(x, y, "#004305");
        }

        /*
        
        ski = new Ski(Math.random() * 700 - 700, Math.random() * 100 + 260);
        
        for (let i: number = 0; i < 10; i++) {
            let s: Ski = new Ski(Math.random() * 700 - 700, Math.random() * 100 + 260);
            s.setRandomStyle();
            skiarray[i] = s;
        }
        
        sun = new Sun(-100, Math.random() * 10 + 50);
        
        snow = new Snow(Math.random() * 800, Math.random() * 800 - 800);
        
        for (let i: number = 0; i < 300; i++) {
            let s: Snow = new Snow(Math.random() * 800, Math.random() * 800 - 800);
            snowarray[i] = s;
        }
        
        */
        
        //Schleife Schnee
        for (let i: number = 0; i < 300; i++) {
            let c: Snow = new Snow(Math.random() * 800, Math.random() * 800 - 800);
            move.push(c);
        }
        
        for (let i: number = 0; i < 13; i++) {
            let c: Ski = new Ski(Math.random() * 700 - 700, Math.random() * 100 + 260);
            move.push(c);
        }
        
        for (let i: number = 0; i < 1; i++) {
            let c: Sun = new Sun(-100, Math.random() * 10 + 50);
            move.push(c);
        }
         
        hintergrund = crc2.getImageData(0, 0, 800, 600); // Lädt zuvor gelöschtes Bild wieder.

        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        crc2.putImageData(hintergrund, 0, 0); // Hier Hintergrund laden.
        
        /*
        
        ski.update();
        for (let i: number = 0; i < skiarray.length; i++) {
            let s: Ski = skiarray[i];
            s.update();
        }
        
        sun.update();
        
        snow.update();
        
        for (let i: number = 0; i < snowarray.length; i++) {
            let s: Snow = snowarray[i];
            s.update();
        }
        
        */
        
        for (let i: number = 0; i < move.length; i++) {
            let s: Move = move[i];
            s.update();
            }
        
        window.setTimeout(animate, 20);
    }
    
        // Funktion die die Tannen zeichnet und animiert.
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