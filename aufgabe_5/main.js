var L05_Class;
(function (L05_Class) {
    var ski;
    var sun;
    var snow;
    window.addEventListener("load", init);
    var hintergrund;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        L05_Class.crc2 = canvas.getContext("2d");
        // Fest definierte Elemente
        //Himmel
        L05_Class.crc2.fillStyle = "#004ae0";
        L05_Class.crc2.fillRect(0, 0, 800, 600);
        //Berg2 (Hintergrund)
        L05_Class.crc2.fillStyle = "#666666";
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(250, 100); //h�he
        L05_Class.crc2.lineTo(425, 450);
        L05_Class.crc2.lineTo(75, 450);
        L05_Class.crc2.fill();
        //Berg3 (Hintergrund)
        L05_Class.crc2.fillStyle = "#434343";
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(450, 10); //h�he
        L05_Class.crc2.lineTo(625, 450);
        L05_Class.crc2.lineTo(275, 450);
        L05_Class.crc2.fill();
        //Skilift
        L05_Class.crc2.fillStyle = "424242"; //Seilbahn
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(0, 100);
        L05_Class.crc2.lineTo(800, 370);
        L05_Class.crc2.stroke();
        L05_Class.crc2.beginPath(); //Halteseil der Gondel
        L05_Class.crc2.moveTo(90, 130);
        L05_Class.crc2.lineTo(90, 150);
        L05_Class.crc2.stroke();
        L05_Class.crc2.fillStyle = "#303030";
        L05_Class.crc2.beginPath(); //Gondel
        L05_Class.crc2.moveTo(50, 135);
        L05_Class.crc2.lineTo(130, 160); //Dach der Gondel
        L05_Class.crc2.lineTo(130, 200); //Rechte Wand
        L05_Class.crc2.lineTo(50, 175); //Boden
        L05_Class.crc2.lineTo(50, 145); //Linke Wand
        L05_Class.crc2.fill();
        //Boden  
        L05_Class.crc2.fillStyle = "#ffffff";
        L05_Class.crc2.fillRect(0, 500, 800, 200);
        //Skipiste
        L05_Class.crc2.fillStyle = "#ffffff";
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(0, 230);
        L05_Class.crc2.lineTo(800, 500);
        L05_Class.crc2.lineTo(-800, 500);
        L05_Class.crc2.fill();
        ski = new L05_Class.Ski(Math.random() * 700 - 700, Math.random() * 100 + 260);
        ski.setRandomStyle();
        sun = new L05_Class.Sun(-100, Math.random() * 10 + 50);
        snow = new L05_Class.Snow(Math.random() * 800, Math.random() * 800 - 800);
        snow.setRandomStyle();
        hintergrund = L05_Class.crc2.getImageData(0, 0, 800, 600); // L�dt zuvor gel�schtes Bild wieder.
        animate();
    }
    function animate() {
        L05_Class.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        L05_Class.crc2.putImageData(hintergrund, 0, 0); // Hier Hintergrund laden.
        ski.update();
        sun.update();
        snow.update();
        window.setTimeout(animate, 20);
    }
})(L05_Class || (L05_Class = {}));
