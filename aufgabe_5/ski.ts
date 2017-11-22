namespace L05_Class {
    export class Ski {
        x: number;
        y: number;
        dx: number;
        dy: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.dx = Math.random() * 1 + 3;
            this.dy = Math.random() * 1 + 1; 
        }
        
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
         //   this.x += Math.random() * 6; // hier experimentieren um
         //   this.y += Math.random() * 2; // andere Bewegungsmuster zu finden
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

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
}