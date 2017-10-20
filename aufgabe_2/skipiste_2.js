var L02;
(function (L02) {
    window.addEventListener("load", init);
    var crc2;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Himmel
        crc2.fillStyle = "#004ae0";
        crc2.fillRect(0, 0, 800, 600);
        //Berg2 (Hintergrund)
        crc2.fillStyle = "#666666";
        crc2.beginPath();
        crc2.moveTo(250, 100); //h�he
        crc2.lineTo(425, 450);
        crc2.lineTo(75, 450);
        crc2.fill();
        //Berg3 (Hintergrund)
        crc2.fillStyle = "#434343";
        crc2.beginPath();
        crc2.moveTo(450, 10); //h�he
        crc2.lineTo(625, 450);
        crc2.lineTo(275, 450);
        crc2.fill();
        //Wolke1  
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
        //Wolke2 
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(600, 100, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(630, 90, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(660, 100, 30, 0, 2 * Math.PI);
        crc2.fill();
        //Wolke3 
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(500, 170, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(530, 160, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(560, 170, 30, 0, 2 * Math.PI);
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
        // 10 Dreiecke an zuf�lliger Position zwischen 150 und 250 horizontal und 200 und 260 vertikal
        for (var i = 0; i < 10; i++) {
            var x = 150 + Math.random() * 100;
            var y = 200 + Math.random() * 60;
            drawTriangle(x, y, "#00FFFF");
        }
    }
    function drawTriangle(_x, _y, _color) {
        //Tanne
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 0, _y + 10);
        crc2.lineTo(_x - 10, _y + 0);
        crc2.lineTo(_x - 10, _y + 0);
        crc2.lineTo(_x + 20, _y + 20);
        crc2.lineTo(_x + 20, _y - 20);
        crc2.lineTo(_x - 10, _y + 0);
        crc2.lineTo(_x + 10, _y - 10);
        crc2.lineTo(_x - 10, _y + 0);
        crc2.lineTo(_x + 0, _y - 10);
        crc2.lineTo(_x - 20, _y + 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
})(L02 || (L02 = {}));
