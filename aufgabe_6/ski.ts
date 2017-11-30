/*
Aufgabe 5: Skipiste mit Klassen
Name: Daniel Sand
Matrikel: 256649
Datum: 17.11.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace L06_Class {
    export class Ski extends Move {
        dx: number;
        dy: number;

        constructor(_x: number, _y: number) {
            super(_x, _y); // "super": Bedeutet greif auf die Superklasse zu.
            this.dx = Math.random() * 2 + 3;
            this.dy = Math.random() * 1 + 1; 
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        move(): void {
            if (this.x > 800) {
                this.x = Math.random() * 700 - 700;
                this.y = Math.random() * 100 + 260;
            }
            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {
        
        crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.fillRect(this.x - 5, this.y, 8, 20)
        crc2.fillRect(this.x - 10, this.y + 20, 30, 5)
        crc2.fillRect(this.x, this.y + 5, 10, 5)
        crc2.fillRect(this.x + 10, this.y + 5, 3, 15)
        }

    }
}