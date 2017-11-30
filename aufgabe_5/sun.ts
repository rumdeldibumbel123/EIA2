/*
Aufgabe 5: Skipiste mit Klassen
Name: Daniel Sand
Matrikel: 256649
Datum: 17.11.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace L05_Class {
    export class Sun {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.color = "#FFFF00";
        }
        
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += Math.random() * 2; // hier experimentieren um
            this.y += Math.random() * 0; // andere Bewegungsmuster zu finden
            if (this.x > 850) {
                this.x = -100, Math.random() * 10 + 50;
            }
        }

        draw(): void {
        
                crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.arc(this.x, this.y, 45, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.fillStyle = this.color;
        crc2.fill();
        }

    }
}