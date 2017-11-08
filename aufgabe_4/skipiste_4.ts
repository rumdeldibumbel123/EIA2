namespace L04 {
    window.addEventListener("load", init); // Horcht bis die Seite geladen ist. Window ist Anzeigebereich.
    let crc2: CanvasRenderingContext2D; // crc2 = Kurzform

    // Arrays
    
    let arrayX: number[] = []; 
    let arrayY: number[] = [];

    var sun: number[] = [];
    var snow: number[] = [];
    var ski: number[] = [];
    var stone: number[] = [500,500];

    var hintergrund: any;

    function init(): void { // function = Container mit eigenen Variablen, void = kein Rückgabewert
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        sun = [Math.random() * 400 + 40, Math.random() * 100 + 40]; // Zufällige Startkoordinaten Sonne
        for (let i: number = 0; i < 50; i++) {
            snow.push(Math.random() * 800, Math.random() * 600); // Zufällige Startkoordinaten Schneeflocken, push = Fügt Array Daten hinzu.
        }
        ski = [-20, 230]; // Startkoordinaten Skifahrer

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
        for (let i: number = 0; i < 10; i++) {
            let x: number = 20 + Math.random() * 400;
            let y: number = 350 + Math.random() * 250;
            drawtree(x, y, "#004305");
        }

        drawtree(100, 300, "#004305"); // Lässt Baum an fester Stelle mithilfe von Funktion erstellen.
        drawtree(150, 300, "#004305");

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
    
    // Jetzt folgen Funktionen die Elemente die automatisch generiert werden sollen.

    function drawski(_x: number, _y: number, _color: string): void {
        //Schneeflocken
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.fillRect(_x - 5, _y, 8, 20)
        crc2.fillRect(_x - 10, _y + 20, 30, 5)
        crc2.fillRect(_x, _y + 5, 10, 5)
        crc2.fillRect(_x + 10, _y + 5, 3, 15)
    }

    function drawsnow(_x: number, _y: number, _color: string): void {
        //Schneeflocken
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
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
    
    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // Hier Hintergrund löschen.
        crc2.putImageData(hintergrund, 0, 0); // Hier Hintergrund laden.
        sun[0] = sun[0] + 1; // Verschiebt Sonne um 1 in x Richtung
        if (sun[0] > 900) { sun[0] = 0; } // Wenn Wert von Sonne größer als 900 ist, starte bei 0 neu.
        drawsun(sun[0], sun[1], "yellow");
        for (let i: number = 0; i < 100; i++) {
            i++;

            snow[i] = snow[i] + 1;
            if (snow[i] > 600) { snow[i] = 0; }
            drawsnow(snow[i - 1], snow[i], "#FFFFFF");
        }
        
        ski[0] = ski[0] + 3; // Animiert Skifahrer
        ski[1] = ski[1] + 2; // Animiert Skifahrer
        if (ski[0] > 600 && ski[1] > 600) { ski[0] = -20; ski[1] = 230; } // Wenn Wert von Skifahrer größer als 600 ist, starte bei 0 neu.
        drawski(ski[0], ski[1], "red");
        

        window.setTimeout(animate, 20); // 20 Milisekunden warten.
    }
}


