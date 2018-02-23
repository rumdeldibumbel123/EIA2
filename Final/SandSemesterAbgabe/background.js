var SemesterAbgabe;
(function (SemesterAbgabe) {
    var Background = (function () {
        function Background(_xPos, _yPos) {
            this.xPosS = [];
            this.yPosS = [];
            this.sterne = 200 * Math.random() + 100;
            this.xPos = _xPos;
            this.yPos = _yPos;
            for (var i = 0; i < this.sterne; i++) {
                this.xPosS[i] = Math.random() * 800;
                this.yPosS[i] = Math.random() * 600;
            }
        }
        Background.prototype.update = function () {
            this.draw();
            this.moveStars();
        };
        Background.prototype.moveStars = function () {
            for (var i = 0; i < this.sterne; i++) {
                this.yPosS[i] += 10;
                if (this.yPosS[i] > 602) {
                    this.yPosS[i] = -2;
                }
            }
        };
        Background.prototype.draw = function () {
            SemesterAbgabe.crc2.fillStyle = "black";
            SemesterAbgabe.crc2.fillRect(0, 0, 800, 600);
            for (var i = 0; i < this.sterne; i++) {
                if (this.sterne / 2 < i) {
                    SemesterAbgabe.crc2.fillStyle = "yellow";
                }
                if (this.sterne / 2 > i) {
                    SemesterAbgabe.crc2.fillStyle = "white";
                }
                SemesterAbgabe.crc2.beginPath();
                SemesterAbgabe.crc2.arc(this.xPosS[i], this.yPosS[i], 2, 0, 2 * Math.PI);
                SemesterAbgabe.crc2.fill();
                SemesterAbgabe.crc2.closePath();
            }
        };
        return Background;
    }());
    SemesterAbgabe.Background = Background;
})(SemesterAbgabe || (SemesterAbgabe = {}));
//# sourceMappingURL=background.js.map