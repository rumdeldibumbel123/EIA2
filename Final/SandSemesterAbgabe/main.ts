namespace SemesterAbgabe {
    export let crc2: CanvasRenderingContext2D;

    let bg: Background;
    let ship:Ship;
    let objs: Asteroid[] = [];
    let objStart: number = 1;
    let counter: number = 0;
    window.addEventListener("load", menu);


    function menu(): void {
        let div: HTMLDivElement = <HTMLDivElement>document.getElementById("div");
        div.style.display = "block";
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Left";
        submit.style.position = "absolute";
        submit.style.left = "10%";
        submit.style.top = "90vh";
        submit.style.width = "20%";
        submit.style.height = "3em";
        submit.addEventListener("mousedown", moveLeft);
        div.appendChild(submit);

        let submit2: HTMLButtonElement = document.createElement("button");
        submit2.name = "Button";
        submit2.type = "button";
        submit2.innerText = "Right";
        submit2.style.position = "absolute";
        submit2.style.left = "70%";
        submit2.style.top = "90vh";
        submit2.style.width = "20%";
        submit2.style.height = "3em";
        submit2.addEventListener("mousedown", moveRight);
        div.appendChild(submit2);
        
        let submit3: HTMLButtonElement = document.createElement("button");
        submit3.name = "Button";
        submit3.type = "button";
        submit3.innerText = "Schuss";
        submit3.style.position = "absolute";
        submit3.style.left = "40%";
        submit3.style.top = "90vh";
        submit3.style.width = "20%";
        submit3.style.height = "3em";
        submit3.addEventListener("mousedown", schuss);
        div.appendChild(submit3);
        init();
    }

    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
        document.addEventListener("click", schuss);
        document.addEventListener("keydown", move);
        bg = new Background(0, 0);
        ship = new Ship(380,450);
              for(let i:number = 0; i< objStart; i++){
                  let obj: Asteroid = new Asteroid(ship);
                   objs.push(obj);
               }
        animate();
    }



    function move(_event: KeyboardEvent): void {
        if (_event.key == "a"  ||_event.key == "A") {
            ship.moveLeft();
        }
        if (_event.key == "d" || _event.key == "D") {
            ship.moveRight();
        }

    }
    function moveLeft(): void {
        ship.moveLeft();
    }
    function moveRight(): void {
        ship.moveRight();
    }
    function schuss(): void {
        ship.schussPosY.push(0);
        ship.schussPosX.push(0);
    }




function animate(): void {
    crc2.clearRect(0, 0, 800, 600);
    
    bg.update();
    ship.update();
    
             counter += 0.1;
                
                crc2.fillStyle = "white";
                crc2.font = "30px Arial";
                crc2.fillText("Punkte: "+Math.round(counter),35, 35);
                for(let i:number = 0; i< objs.length; i++){
                let obj: Asteroid = objs[i];
                obj.update();           
                if(obj.yPos-20 < ship.yPos && obj.yPos-20+45 > ship.yPos && obj.xPos-20 < ship.xPos && obj.xPos-20+45 > ship.xPos ||obj.yPos-20 < ship.yPos && obj.yPos-20+45 > ship.yPos && obj.xPos-20 < ship.xPos+50 && obj.xPos-20+45 > ship.xPos+50){
                 
                    alert("GAME OVER");    
                    location.reload();
                } 

                
                if(obj.yPos > 600 && objs.length < 15){
                   for(let i:number = 0; i< objStart; i++){
                let obj: Asteroid = new Asteroid(ship);
                objs.push(obj);
                  }
              }
          }
        
    window.setTimeout(animate, 20);
}
}
