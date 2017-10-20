var L02;
(function (L02) {
    window.addEventListener("load", init);
    var crc2;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Background
        crc2.fillStyle = "#ff0000";
        crc2.fillRect(0, 0, 400, 300);
        // Line
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(400, 300);
        crc2.stroke();
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
