namespace L06_Class {

    export class Move {

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