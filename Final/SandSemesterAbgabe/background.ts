namespace SemesterAbgabe {


    export class Background {
        xPos: number;
        yPos: number;
        xPosS: number[] =[];
        yPosS: number[] = [];
        sterne: number = 200 * Math.random()+100;

        constructor(_xPos: number, _yPos: number) {

            this.xPos = _xPos;
            this.yPos = _yPos;
            for (let i: number = 0; i < this.sterne; i++) {
                this.xPosS[i] = Math.random()*800;
                this.yPosS[i] = Math.random()*600;
         }
        }
        update(): void {
            this.draw();
            this.moveStars();
        }
        moveStars():void{
             for (let i: number = 0; i < this.sterne; i++) {
               
                this.yPosS[i] += 10;
                 if(this.yPosS[i] > 602){
                     this.yPosS[i] = -2;
                 }
         }
        }

        draw(): void {

            crc2.fillStyle = "black";
            crc2.fillRect(0, 0, 800, 600);
            
            for (let i: number = 0; i < this.sterne; i++) {
                if(this.sterne/2 < i){
                crc2.fillStyle = "yellow";
                    }
                if(this.sterne/2 > i){
                crc2.fillStyle = "white";
                    }
                crc2.beginPath();
                crc2.arc(this.xPosS[i], this.yPosS[i], 2, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
            }

        }

    }
}