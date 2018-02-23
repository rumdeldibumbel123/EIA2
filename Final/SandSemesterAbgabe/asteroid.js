var SemesterAbgabe;
(function (SemesterAbgabe) {
    var Asteroid = (function () {
        function Asteroid(_ship) {
            this.lebt = true;
            this.xPos = Math.random() * 800;
            this.yPos = Math.random() * -400 - 100;
            this.ship = _ship;
        }
        Asteroid.prototype.update = function () {
            if (this.lebt == true) {
                this.draw();
                this.move();
            }
        };
        // Wenn von Schuss getroffen dann Objekt "löschen" Leider stürtzte die seite immer ab
        //        colision():void{
        //           for(let i :number = 0; i<this.ship.schussPosY.length; i++){
        //               if(this.xPos-20 < this.ship.schussPosX[i] && this.xPos -20+45 > this.ship.schussPosX[i] && this.yPos > this.ship.schussPosY[i]){
        //                   this.lebt = false;
        //               }                     
        //           } 
        //        }
        Asteroid.prototype.move = function () {
            if (this.yPos > 600) {
                this.xPos = Math.random() * 800;
                this.yPos = Math.random() * -400 - 100;
            }
            this.yPos += 10;
        };
        Asteroid.prototype.draw = function () {
            SemesterAbgabe.crc2.fillStyle = "#948260";
            SemesterAbgabe.crc2.beginPath();
            SemesterAbgabe.crc2.arc(this.xPos, this.yPos, 15, 0, 2 * Math.PI);
            SemesterAbgabe.crc2.fill();
            SemesterAbgabe.crc2.closePath();
            SemesterAbgabe.crc2.beginPath();
            SemesterAbgabe.crc2.arc(this.xPos + 10, this.yPos + 10, 15, 0, 2 * Math.PI);
            SemesterAbgabe.crc2.fill();
            SemesterAbgabe.crc2.closePath();
            SemesterAbgabe.crc2.beginPath();
            SemesterAbgabe.crc2.arc(this.xPos - 7, this.yPos + 5, 15, 0, 2 * Math.PI);
            SemesterAbgabe.crc2.fill();
            SemesterAbgabe.crc2.closePath();
        };
        return Asteroid;
    }());
    SemesterAbgabe.Asteroid = Asteroid;
})(SemesterAbgabe || (SemesterAbgabe = {}));
//# sourceMappingURL=asteroid.js.map