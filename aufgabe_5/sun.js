/*
Aufgabe 5: Skipiste mit Klassen
Name: Daniel Sand
Matrikel: 256649
Datum: 17.11.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var L05_Class;
(function (L05_Class) {
    var Sun = (function () {
        function Sun(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.color = "#FFFF00";
        }
        Sun.prototype.update = function () {
            this.move();
            this.draw();
        };
        Sun.prototype.move = function () {
            this.x += Math.random() * 2; // hier experimentieren um
            this.y += Math.random() * 0; // andere Bewegungsmuster zu finden
            if (this.x > 850) {
                this.x = -100, Math.random() * 10 + 50;
            }
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
        return Sun;
    }());
    L05_Class.Sun = Sun;
})(L05_Class || (L05_Class = {}));
