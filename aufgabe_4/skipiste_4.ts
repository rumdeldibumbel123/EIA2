/*
Aufgabe 4: Skipiste mit Interfaces
Name: Daniel Sand
Matrikel: 256649
Datum: 9.11.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace L04 {
    window.addEventListener("load", init); // Horcht bis die Seite geladen ist. Window ist Anzeigebereich.
    let crc2: CanvasRenderingContext2D; // crc2 = Kurzform

        interface skiinfo {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
    }
    
        interface suninfo {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
    }
    
        interface snowinfo {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
    }
    
    let ski: skiinfo[] = [];
    let sun: suninfo[] = [];
    let snow: snowinfo[] = [];
    
    // Definiert die variablen Startkoordinaten der 15 Skifahrer
        for (let i: number = 0; i < 15; i++) {

            ski[i] = {

                x: Math.random() * 700 - 700,
                y: Math.random() * 100 + 260,
                dx: Math.random() * 1 + 3,
                dy: Math.random() * 1 + 1,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"

            };

        }

    // Definiert die Startkoordinaten der Sonne.
        sun[0] = {
            
            x: -100,
            y: Math.random() * 10 +50,
            dx: + 1,
            dy: + 1,
            color: "#FFFF00"
            
        };

    // Definiert die variablen Startkoordinaten der Schneeflocken.
        for (let i: number = 0; i < 600; i++) {

            snow[i] = {

                x: Math.random() * 800,
                y: Math.random() * 800 - 800,
                dx: Math.random() * 2 + 1,
                dy: Math.random() * 1 + 1,
                color: "#DADADA"

            };

        }

    var hintergrund: any;

    function init(): void { // function = Container mit eigenen Variablen, void = kein Rückgabewert
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
        for (let i: number = 0; i < 10; i++) {
            let x: number = 20 + Math.random() * 400;
            let y: number = 350 + Math.random() * 250;
            drawtree(x, y, "#004305");
        }

        //Wolke 
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(700, 195, 30, 0, 2 * Math.PI); // Math.PI = Berechnet/Zeichnet Kreis
        crc2.fill();
        crc2.beginPath();
        crc2.arc(730, 185, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(760, 195, 30, 0, 2 * Math.PI);
        crc2.fill();

        hintergrund = crc2.getImageData(0, 0, 800, 600); // Lädt zuvor gelöschtes Bild wieder.
        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // Hier Hintergrund löschen.
        crc2.putImageData(hintergrund, 0, 0); // Hier Hintergrund laden.

        // Ruft Anzahl Skifahrer abhängig der Länge des Arrays auf.
        for (let i: number = 0; i < ski.length; i++) {
            moveAndDrawski(ski[i]);
        }
        
        // Ruft Sonne auf.
        moveAndDrawsun(sun[0]);

        // Ruft Anzahl Schneeflocken abhängig der Länge des Arrays auf.
        for (let i: number = 0; i < snow.length; i++) {
            moveAndDrawsnow(snow[i]);
        }
        
        // 20 Millisekunden Timeout.
        window.setTimeout(animate, 20);
    }

    // Funktion die Skifahrer zeichnet und animiert.

    function moveAndDrawski(_ski: skiinfo): void {

        _ski.x += _ski.dx;
        _ski.y += _ski.dy;

        crc2.beginPath();
        crc2.moveTo(_ski.x, _ski.y);
        crc2.arc(_ski.x, _ski.y, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _ski.color;
        crc2.fill();
        crc2.fillRect(_ski.x - 5, _ski.y, 8, 20)
        crc2.fillRect(_ski.x - 10, _ski.y + 20, 30, 5)
        crc2.fillRect(_ski.x, _ski.y + 5, 10, 5)
        crc2.fillRect(_ski.x + 10, _ski.y + 5, 3, 15)

        if (_ski.x > 600 && _ski.y > 600) { _ski.x = Math.random() * 700 - 700; _ski.y = Math.random() * 100 + 260 }

    }

    // Funktion die Sonne zeichnet und animiert.
    function moveAndDrawsun(_sun: suninfo): void {

        _sun.x += _sun.dx;

        crc2.beginPath();
        crc2.moveTo(_sun.x, _sun.y);
        crc2.arc(_sun.x, _sun.y, 45, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.fillStyle = _sun.color;
        crc2.fill();

        if (_sun.x > 900) { _sun.x = 0; }

    }

    // Funktion die Schneeflocken zeichnet und animiert.
    function moveAndDrawsnow(_snow: snowinfo): void {

        _snow.y += _snow.dy;

        crc2.beginPath();
        crc2.moveTo(_snow.x, _snow.y);
        crc2.arc(_snow.x, _snow.y, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.fillStyle = _snow.color;
        crc2.fill();

        if (_snow.y > 900) { _snow.y = 0; }

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