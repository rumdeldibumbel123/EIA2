var L04_InterfaceArray;
(function (L04_InterfaceArray) {
    window.addEventListener("load", init);
    var crc2;
    var squares = [];
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");
        animate();
        for (var i = 0; i < 100; i++) {
            squares[i] = {
                x: 200,
                y: 100,
                dx: Math.random() * 2 - 1,
                dy: Math.random() * 2 - 1,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
        // hier Hintergrund speichern
    }
    function animate() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 400, 300); // hier Hintergrund restaurieren
        for (var i = 0; i < squares.length; i++) {
            moveAndDrawSquare(squares[i]);
        }
        window.setTimeout(animate, 20);
    }
    function moveAndDrawSquare(_square) {
        _square.x += _square.dx;
        _square.y += _square.dy; // andere Bewegungsmuster zu finden
        crc2.fillStyle = _square.color;
        crc2.fillRect(_square.x, _square.y, 20, 20);
    }
})(L04_InterfaceArray || (L04_InterfaceArray = {}));
