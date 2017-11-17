var L05_Class;
(function (L05_Class) {
    var Ski = (function () {
        function Ski(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Ski.prototype.sayHello = function () {
            console.log("Hallo");
        };
        Ski.prototype.update = function () {
            this.move();
            this.draw();
        };
        Ski.prototype.move = function () {
            this.x += Math.random() * 4 - 2; // hier experimentieren um
            this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
        };
        Ski.prototype.draw = function () {
            L05_Class.crc2.fillStyle = this.color;
            L05_Class.crc2.fillRect(this.x, this.y, this.size, this.size);
        };
        Ski.prototype.setRandomStyle = function () {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        return Ski;
    }());
    L05_Class.Ski = Ski;
})(L05_Class || (L05_Class = {}));
