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

    export class Move { // "export class": Bedeutet das andere Klassen auf diese zugreifen.

        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;


        }

        update(): void {
            this.move();
            this.draw();
        }
        
        move(): void {
            // Sonst ist der Block leer.
            }
        
        draw(): void {
            // Sonst ist der Block leer.
            }    
        
    }



}