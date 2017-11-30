/*
Aufgabe 5: Skipiste mit Klassen
Name: Daniel Sand
Matrikel: 256649
Datum: 17.11.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L06_Class;
(function (L06_Class) {
    var Ski = (function (_super) {
        __extends(Ski, _super);
        function Ski(_x, _y) {
            _super.call(this, _x, _y); // "super": Bedeutet greif auf die Superklasse zu.
            this.dx = Math.random() * 2 + 3;
            this.dy = Math.random() * 1 + 1;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        Ski.prototype.move = function () {
            if (this.x > 800) {
                this.x = Math.random() * 700 - 700;
                this.y = Math.random() * 100 + 260;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        Ski.prototype.draw = function () {
            L06_Class.crc2.beginPath();
            L06_Class.crc2.moveTo(this.x, this.y);
            L06_Class.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            L06_Class.crc2.fill();
            L06_Class.crc2.closePath();
            L06_Class.crc2.stroke();
            L06_Class.crc2.fillStyle = this.color;
            L06_Class.crc2.fill();
            L06_Class.crc2.fillRect(this.x - 5, this.y, 8, 20);
            L06_Class.crc2.fillRect(this.x - 10, this.y + 20, 30, 5);
            L06_Class.crc2.fillRect(this.x, this.y + 5, 10, 5);
            L06_Class.crc2.fillRect(this.x + 10, this.y + 5, 3, 15);
        };
        return Ski;
    }(L06_Class.Move));
    L06_Class.Ski = Ski;
})(L06_Class || (L06_Class = {}));
