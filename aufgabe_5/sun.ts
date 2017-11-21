namespace L05_Class {
    export class Sun {
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
            this.x += Math.random() * 1; // hier experimentieren um
            this.y += Math.random() * 0; // andere Bewegungsmuster zu finden
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

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
}