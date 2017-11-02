//Aufgabe: Aufgabe 2
//Name: Daniel Sand
//Matrikel: 255649
//Datum: 15.10.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

window.addEventListener("load", ski);


function ski(): void {
    (document.getElementsByTagName("canvas")[0]);
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0]; //
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

    // Himmel
    crc2.fillStyle = "#004ae0";
    crc2.fillRect(0, 0, 800, 600); // Gr��e des Himmels

    // Berg 2 (Hintergrund)
    crc2.fillStyle = "#666666";
    crc2.beginPath();
    crc2.moveTo(250, 100); // H�he
    crc2.lineTo(425, 450);
    crc2.lineTo(75, 450);
    crc2.fill();

    // Berg 3 (Hintergrund)
    crc2.fillStyle = "#434343";
    crc2.beginPath();
    crc2.moveTo(450, 10); // H�he
    crc2.lineTo(625, 450);
    crc2.lineTo(275, 450);
    crc2.fill();

    // Wolke 1  
    crc2.fillStyle = "#ffffff";
    crc2.beginPath();
    crc2.arc(700, 195, 30, 0, 2 * Math.PI);
    crc2.fill();
    crc2.beginPath();
    crc2.arc(730, 185, 30, 0, 2 * Math.PI);
    crc2.fill();
    crc2.beginPath();
    crc2.arc(760, 195, 30, 0, 2 * Math.PI);
    crc2.fill();

    // Wolke 2 
    crc2.fillStyle = "#ffffff";
    crc2.beginPath();
    crc2.arc(600, 100, 30, 0, 2 * Math.PI);
    crc2.fill();
    crc2.beginPath();
    crc2.arc(630, 90, 30, 0, 2 * Math.PI);
    crc2.fill();
    crc2.beginPath();
    crc2.arc(660, 100, 30, 0, 2 * Math.PI);
    crc2.fill();

    // Wolke 3 
    crc2.fillStyle = "#ffffff";
    crc2.beginPath();
    crc2.arc(500, 170, 30, 0, 2 * Math.PI);
    crc2.fill();
    crc2.beginPath();
    crc2.arc(530, 160, 30, 0, 2 * Math.PI);
    crc2.fill();
    crc2.beginPath();
    crc2.arc(560, 170, 30, 0, 2 * Math.PI);
    crc2.fill();

    // Skilift
    crc2.fillStyle = "424242"; // Seilbahn
    crc2.beginPath();
    crc2.moveTo(0, 100);
    crc2.lineTo(800, 370);
    crc2.stroke();

    crc2.beginPath(); //Halteseil der Gondel
    crc2.moveTo(90, 130);
    crc2.lineTo(90, 150);
    crc2.stroke();

    crc2.fillStyle = "#303030";
    crc2.beginPath(); // Gondel
    crc2.moveTo(50, 135); // Startpunkt Gondel
    crc2.lineTo(130, 160); // Dach der Gondel
    crc2.lineTo(130, 200); // Rechte Wand
    crc2.lineTo(50, 175); // Boden
    crc2.lineTo(50, 145); // Linke Wand
    crc2.fill();

    // Baum 1
    crc2.fillStyle = "#342c22";
    crc2.fillRect(550, 275, 20, 150);
    crc2.fillStyle = "#005518";
    crc2.beginPath();
    crc2.moveTo(490, 360);
    crc2.lineTo(630, 360);
    crc2.lineTo(560, 310);
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(510, 330);
    crc2.lineTo(610, 330);
    crc2.lineTo(560, 280);
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(530, 300);
    crc2.lineTo(590, 300);
    crc2.lineTo(560, 250);
    crc2.fill();

    // Boden  
    crc2.fillStyle = "#f2f2f2";
    crc2.fillRect(0, 500, 800, 200);

    // Berg
    crc2.fillStyle = "#8e8e8e";
    crc2.beginPath();
    crc2.moveTo(0, 230);
    crc2.lineTo(800, 500);
    crc2.lineTo(-800, 500);
    crc2.fill();

}