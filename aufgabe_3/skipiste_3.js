var L03;
(function (L03) {
    window.addEventListener("load", init);
    var crc2;
    var arrayX = [];
    var arrayY = [];
    var sun = [];
    var snow = [];
    var ski = [];
    var stone = [500, 500];
    var hintergrund;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        sun = [Math.random() * 400 + 40, Math.random() * 100 + 40]; // Startkoordinaten Sonne
        for (var i = 0; i < 50; i++) {
            snow.push(Math.random() * 800, Math.random() * 600); // Startkoordinaten Schneeflocken
        }
        ski = [-20, 230];
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
        // 10 Tannen an zuf�lliger Position zwischen 20 und 420 horizontal und 350 und 600 vertikal
        for (var i = 0; i < 10; i++) {
            var x = 20 + Math.random() * 400;
            var y = 350 + Math.random() * 250;
            drawtree(x, y, "#004305");
        }
        drawtree(100, 300, "#004305");
        drawtree(150, 300, "#004305");
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
        hintergrund = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function drawski(_x, _y, _color) {
        //Schneeflocken
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.fillRect(_x - 5, _y, 8, 20);
        crc2.fillRect(_x - 10, _y + 20, 30, 5);
        crc2.fillRect(_x, _y + 5, 10, 5);
        crc2.fillRect(_x + 10, _y + 5, 3, 15);
    }
    function drawstone(_x, _y, _color) {
        //Felsen
        crc2.fillStyle = _color;
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 100, _y + 100);
        crc2.lineTo(_x - 100, _y + 100);
        crc2.fill();
    }
    function drawsnow(_x, _y, _color) {
        //Schneeflocken
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    function drawsun(_x, _y, _color) {
        //Sonne
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 45, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    function drawtree(_x, _y, _color) {
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
    function hubhubAn() {
        var audio = document.getElementById("audio");
        audio.play();
    }
    function hubhubAus() {
        var audio = document.getElementById("audio");
    }
    function animate() {
        crc2.clearRect(0, 0, 800, 600); // Hier Hintergrund l�schen.
        crc2.putImageData(hintergrund, 0, 0); // Hier Hintergrund laden.
        sun[0] = sun[0] + 1;
        if (sun[0] > 900) {
            sun[0] = 0;
        }
        drawsun(sun[0], sun[1], "yellow");
        for (var i = 0; i < 100; i++) {
            i++;
            snow[i] = snow[i] + 1;
            if (snow[i] > 600) {
                snow[i] = 0;
            }
            drawsnow(snow[i - 1], snow[i], "#FFFFFF");
        }
        ski[0] = ski[0] + 3;
        ski[1] = ski[1] + 2;
        if (ski[0] > 900) {
            ski[0] = -20;
            ski[1] = 230;
        }
        drawski(ski[0], ski[1], "red");
        if (ski[0] < stone[0]) {
            drawstone(stone[0], stone[1], "darkgrey");
        }
        else if (stone[0] < ski[0]) {
            drawstone(stone[0], stone[1], "red");
            hubhubAn();
        }
        window.setTimeout(animate, 20);
    }
})(L03 || (L03 = {}));
