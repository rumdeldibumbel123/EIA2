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
    export class Snow extends Move {
        dx: number;
        dy: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.dx = Math.random() * 2 - 1;
            this.dy = Math.random() * 1 + 1;
            this.color = "#FFFFFF";
        }

        move(): void {
            if (this.y > 800) {
                this.x = Math.random() * 800;
                this.y = Math.random() * 800 - 800;
            }
            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {
        
        crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.fillStyle = this.color;
        crc2.fill();
        }

    }
}