var SemesterAbgabe;
(function (SemesterAbgabe) {
    var Ship = (function () {
        function Ship(_xPos, _yPos) {
            this.schussPosY = [];
            this.schussPosX = [];
            this.xPos = _xPos;
            this.yPos = _yPos;
        }
        Ship.prototype.update = function () {
            this.draw();
            this.schuss();
        };
        Ship.prototype.moveLeft = function () {
            this.xPos -= 20;
            if (this.xPos <= 10) {
                this.xPos = 10;
            }
        };
        Ship.prototype.moveRight = function () {
            this.xPos += 20;
            if (this.xPos >= 750) {
                this.xPos = 750;
            }
        };
        Ship.prototype.schuss = function () {
            for (var i = 0; i < this.schussPosY.length; i++) {
                this.schussPosY[i] -= 10;
                this.schussPosX[i] = this.xPos;
                SemesterAbgabe.crc2.fillRect(this.schussPosX[i] + 17.5, this.yPos - 40 + this.schussPosY[i], 5, 30);
                if (this.schussPosY[i] < -610) {
                    this.schussPosY.shift();
                }
            }
        };
        Ship.prototype.draw = function () {
            SemesterAbgabe.crc2.fillStyle = "white";
            SemesterAbgabe.crc2.fillRect(this.xPos, this.yPos, 40, 15);
            SemesterAbgabe.crc2.fillRect(this.xPos - 10, this.yPos + 5, 60, 10);
            SemesterAbgabe.crc2.beginPath;
            SemesterAbgabe.crc2.arc(this.xPos + 20, this.yPos, 12, 0, 2 * Math.PI);
            SemesterAbgabe.crc2.fill();
            SemesterAbgabe.crc2.closePath();
            SemesterAbgabe.crc2.fillStyle = "red";
            SemesterAbgabe.crc2.fillRect(this.xPos + 15, this.yPos - 20, 10, 40);
            SemesterAbgabe.crc2.fillRect(this.xPos - 5, this.yPos - 15, 5, 30);
            SemesterAbgabe.crc2.fillRect(this.xPos + 40, this.yPos - 15, 5, 30);
            SemesterAbgabe.crc2.fillRect(this.xPos + 17.5, this.yPos - 40, 5, 30);
        };
        return Ship;
    }());
    SemesterAbgabe.Ship = Ship;
})(SemesterAbgabe || (SemesterAbgabe = {}));
//# sourceMappingURL=ship.js.map