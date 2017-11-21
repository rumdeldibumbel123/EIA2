var L05_Class;
(function (L05_Class) {
    var Sun = (function () {
        function Sun(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Sun.prototype.update = function () {
            this.move();
            this.draw();
        };
        Sun.prototype.move = function () {
            this.x += Math.random() * 1; // hier experimentieren um
            this.y += Math.random() * 0; // andere Bewegungsmuster zu finden
        };
        Sun.prototype.draw = function () {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.moveTo(this.x, this.y);
            L05_Class.crc2.arc(this.x, this.y, 45, 0, 2 * Math.PI);
            L05_Class.crc2.fill();
            L05_Class.crc2.closePath();
            L05_Class.crc2.fillStyle = this.color;
            L05_Class.crc2.fill();
        };
        Sun.prototype.setRandomStyle = function () {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        return Sun;
    }());
    L05_Class.Sun = Sun;
})(L05_Class || (L05_Class = {}));
