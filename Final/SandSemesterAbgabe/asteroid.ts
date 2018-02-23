namespace SemesterAbgabe {


    export class Asteroid {
        lebt : boolean = true;
        xPos: number = Math.random() * 800;
        yPos: number = Math.random()*-400 - 100;
        ship:Ship;

        constructor(_ship:Ship) {
            this.ship=_ship;
        }
        update(): void {
            if(this.lebt == true){
            this.draw();
            this.move();
           // this.colision();
                }
        }
        // Wenn von Schuss getroffen dann Objekt "löschen" Leider stürtzte die seite immer ab
//        colision():void{
//           for(let i :number = 0; i<this.ship.schussPosY.length; i++){
//               if(this.xPos-20 < this.ship.schussPosX[i] && this.xPos -20+45 > this.ship.schussPosX[i] && this.yPos > this.ship.schussPosY[i]){
//                   this.lebt = false;
//               }                     
//           } 
//        }
        move():void{
               if(this.yPos > 600){
                     this.xPos = Math.random() * 800;
                    this.yPos = Math.random()*-400 - 100;
                 }
                this.yPos += 10;
            
                 
         
        }
        
        draw(): void {
            crc2.fillStyle = "#948260";
            crc2.beginPath();
            crc2.arc(this.xPos, this.yPos, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.xPos+10, this.yPos+10, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.xPos-7, this.yPos+5, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
        }

    }
}