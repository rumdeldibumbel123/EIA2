namespace L06_Class {
    export class Sun extends Move {


        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.color = "#FFFF00";
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