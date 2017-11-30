/*
Aufgabe 6: Skipiste mit Superklassen
Name: Daniel Sand
Matrikel: 256649
Datum: 17.11.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var L06_Class;
(function (L06_Class) {
    var move = [];
    window.addEventListener("load", init);
    var hintergrund;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        L06_Class.crc2 = canvas.getContext("2d");
        // Fest definierte Elemente
        //Himmel
        L06_Class.crc2.fillStyle = "#004ae0";
        L06_Class.crc2.fillRect(0, 0, 800, 600);
        //Berg2 (Hintergrund)
        L06_Class.crc2.fillStyle = "#666666";
        L06_Class.crc2.beginPath();
        L06_Class.crc2.moveTo(250, 100); //h�he
        L06_Class.crc2.lineTo(425, 450);
        L06_Class.crc2.lineTo(75, 450);
        L06_Class.crc2.fill();
        //Berg3 (Hintergrund)
        L06_Class.crc2.fillStyle = "#434343";
        L06_Class.crc2.beginPath();
        L06_Class.crc2.moveTo(450, 10); //h�he
        L06_Class.crc2.lineTo(625, 450);
        L06_Class.crc2.lineTo(275, 450);
        L06_Class.crc2.fill();
        //Skilift
        L06_Class.crc2.fillStyle = "424242"; //Seilbahn
        L06_Class.crc2.beginPath();
        L06_Class.crc2.moveTo(0, 100);
        L06_Class.crc2.lineTo(800, 370);
        L06_Class.crc2.stroke();
        L06_Class.crc2.beginPath(); //Halteseil der Gondel
        L06_Class.crc2.moveTo(90, 130);
        L06_Class.crc2.lineTo(90, 150);
        L06_Class.crc2.stroke();
        L06_Class.crc2.fillStyle = "#303030";
        L06_Class.crc2.beginPath(); //Gondel
        L06_Class.crc2.moveTo(50, 135);
        L06_Class.crc2.lineTo(130, 160); //Dach der Gondel
        L06_Class.crc2.lineTo(130, 200); //Rechte Wand
        L06_Class.crc2.lineTo(50, 175); //Boden
        L06_Class.crc2.lineTo(50, 145); //Linke Wand
        L06_Class.crc2.fill();
        //Boden  
        L06_Class.crc2.fillStyle = "#ffffff";
        L06_Class.crc2.fillRect(0, 500, 800, 200);
        //Skipiste
        L06_Class.crc2.fillStyle = "#ffffff";
        L06_Class.crc2.beginPath();
        L06_Class.crc2.moveTo(0, 230);
        L06_Class.crc2.lineTo(800, 500);
        L06_Class.crc2.lineTo(-800, 500);
        L06_Class.crc2.fill();
        // 10 Tannen an zuf�lliger Position zwischen 20 und 420 horizontal und 350 und 600 vertikal
        for (var i = 0; i < 3; i++) {
            var x = 20 + Math.random() * 200;
            var y = 350 + Math.random() * 250;
            drawtree(x, y, "#004305");
        }
        //Schleife Schnee
        for (var i = 0; i < 300; i++) {
            var c = new L06_Class.Snow(Math.random() * 800, Math.random() * 800 - 800);
            move.push(c); // "move.push(c): F�gt dem Array neue Daten hinzu.
        }
        for (var i = 0; i < 13; i++) {
            var c = new L06_Class.Ski(Math.random() * 700 - 700, Math.random() * 100 + 260);
            move.push(c); // "move.push(c): F�gt dem Array neue Daten hinzu.
        }
        for (var i = 0; i < 1; i++) {
            var c = new L06_Class.Sun(-100, Math.random() * 10 + 50);
            move.push(c); // "move.push(c): F�gt dem Array neue Daten hinzu.
        }
        hintergrund = L06_Class.crc2.getImageData(0, 0, 800, 600); // L�dt zuvor gel�schtes Bild wieder.
        animate();
    }
    function animate() {
        L06_Class.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        L06_Class.crc2.putImageData(hintergrund, 0, 0); // Hier Hintergrund laden.
        for (var i = 0; i < move.length; i++) {
            var s = move[i]; // Greift auf die aktuelle Position im Array zu um die neuen Positionen zu bestimmen.
            s.update();
        }
        window.setTimeout(animate, 20);
    }
    // Funktion die die Tannen zeichnet und animiert.
    function drawtree(_x, _y, _color) {
        //Tanne
        L06_Class.crc2.beginPath();
        L06_Class.crc2.moveTo(_x, _y);
        L06_Class.crc2.lineTo(_x - 10, _y + 0);
        L06_Class.crc2.lineTo(_x - 10, _y - 10);
        L06_Class.crc2.lineTo(_x - 20, _y - 10);
        L06_Class.crc2.lineTo(_x - 10, _y - 20);
        L06_Class.crc2.lineTo(_x - 20, _y - 20);
        L06_Class.crc2.lineTo(_x + 0, _y - 40);
        L06_Class.crc2.lineTo(_x + 20, _y - 20);
        L06_Class.crc2.lineTo(_x + 10, _y - 20);
        L06_Class.crc2.lineTo(_x + 20, _y - 10);
        L06_Class.crc2.lineTo(_x - 10, _y - 10);
        L06_Class.crc2.lineTo(_x + 10, _y - 10);
        L06_Class.crc2.lineTo(_x + 10, _y + 0);
        L06_Class.crc2.closePath();
        L06_Class.crc2.stroke();
        L06_Class.crc2.fillStyle = _color;
        L06_Class.crc2.fill();
    }
})(L06_Class || (L06_Class = {}));
