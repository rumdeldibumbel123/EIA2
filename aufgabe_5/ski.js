var L05_Class;
(function (L05_Class) {
    var Ski = (function () {
        function Ski(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Ski.prototype.update = function () {
            this.move();
            this.draw();
        };
        Ski.prototype.move = function () {
            this.x += Math.random() * 4; // hier experimentieren um
            this.y += Math.random() * 1; // andere Bewegungsmuster zu finden
        };
        Ski.prototype.draw = function () {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.moveTo(this.x, this.y);
            L05_Class.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L05_Class.crc2.fill();
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.fillStyle = this.color;
            L05_Class.crc2.fill();
            L05_Class.crc2.fillRect(this.x - 5, this.y, 8, 20);
            L05_Class.crc2.fillRect(this.x - 10, this.y + 20, 30, 5);
            L05_Class.crc2.fillRect(this.x, this.y + 5, 10, 5);
            L05_Class.crc2.fillRect(this.x + 10, this.y + 5, 3, 15);
        };
        Ski.prototype.setRandomStyle = function () {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        return Ski;
    }());
    L05_Class.Ski = Ski;
})(L05_Class || (L05_Class = {}));
