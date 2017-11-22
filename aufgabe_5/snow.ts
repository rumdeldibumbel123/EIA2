namespace L05_Class {
    export class Snow {
        x: number;
        y: number;
        dx: number;
        dy: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.dx = Math.random() * 2 - 1;
            this.dy = Math.random() * 1 + 1;
            this.color = "#FFFFFF";
        }
        
        update(): void {
            this.move();
            this.draw();
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