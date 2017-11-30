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
    var Sun = (function (_super) {
        __extends(Sun, _super);
        function Sun(_x, _y) {
            _super.call(this, _x, _y);
            this.color = "#FFFF00";
        }
        Sun.prototype.move = function () {
            this.x += Math.random() * 2; // hier experimentieren um
            this.y += Math.random() * 0; // andere Bewegungsmuster zu finden
            if (this.x > 850) {
                this.x = -100, Math.random() * 10 + 50;
            }
        };
        Sun.prototype.draw = function () {
            L06_Class.crc2.beginPath();
            L06_Class.crc2.moveTo(this.x, this.y);
            L06_Class.crc2.arc(this.x, this.y, 45, 0, 2 * Math.PI);
            L06_Class.crc2.fill();
            L06_Class.crc2.closePath();
            L06_Class.crc2.fillStyle = this.color;
            L06_Class.crc2.fill();
        };
        return Sun;
    }(L06_Class.Move));
    L06_Class.Sun = Sun;
})(L06_Class || (L06_Class = {}));
