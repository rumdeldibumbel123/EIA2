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
    var Snow = (function () {
        function Snow(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.dx = Math.random() * 2 - 1;
            this.dy = Math.random() * 1 + 1;
            this.color = "#FFFFFF";
        }
        Snow.prototype.update = function () {
            this.move();
            this.draw();
        };
        Snow.prototype.move = function () {
            if (this.y > 800) {
                this.x = Math.random() * 800;
                this.y = Math.random() * 800 - 800;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        Snow.prototype.draw = function () {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.moveTo(this.x, this.y);
            L05_Class.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            L05_Class.crc2.fill();
            L05_Class.crc2.closePath();
            L05_Class.crc2.fillStyle = this.color;
            L05_Class.crc2.fill();
        };
        return Snow;
    }());
    L05_Class.Snow = Snow;
})(L05_Class || (L05_Class = {}));
