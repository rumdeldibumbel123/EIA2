namespace SemesterAbgabe {


    export class Ship {
        xPos: number;
        yPos: number;
        schussPosY:number[] =[];
        schussPosX:number[] =[];

        constructor(_xPos: number, _yPos: number) {

            this.xPos = _xPos;
            this.yPos = _yPos;

        }
        update(): void {
            this.draw();
            this.schuss();
           
        }
        moveLeft():void{
           this.xPos -= 20; 
            if(this.xPos <=10){
                this.xPos = 10;
            }
        }
        moveRight():void{
            this.xPos += 20;  
            if(this.xPos >=750){
                this.xPos = 750;
            }         
        }
        schuss():void{

                for(let i:number = 0; i< this.schussPosY.length;i++){
            this.schussPosY[i] -= 10;
            this.schussPosX[i] = this.xPos;
           crc2.fillRect(this.schussPosX[i]+17.5, this.yPos-40+this.schussPosY[i], 5, 30); 
                    if(this.schussPosY[i] < -610){
                        this.schussPosY.shift();
                    }
                }
               
        }
        draw(): void {

            crc2.fillStyle = "white";
            crc2.fillRect(this.xPos, this.yPos, 40, 15);
            crc2.fillRect(this.xPos-10, this.yPos+5, 60, 10);
            crc2.beginPath
              crc2.arc(this.xPos+20, this.yPos, 12, 0, 2 * Math.PI);
            
            crc2.fill();
            crc2.closePath();
            crc2.fillStyle = "red";
            crc2.fillRect(this.xPos+15, this.yPos-20, 10, 40);
            crc2.fillRect(this.xPos-5, this.yPos-15, 5, 30);
            crc2.fillRect(this.xPos+40, this.yPos-15, 5, 30);
            crc2.fillRect(this.xPos+17.5, this.yPos-40, 5, 30);

        }

    }
}