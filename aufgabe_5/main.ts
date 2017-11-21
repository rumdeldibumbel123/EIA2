namespace L05_Class {
    export let crc2: CanvasRenderingContext2D;

    let ski: Ski;
    let sun: Sun;
    let snow: Snow;
    
    window.addEventListener("load", init);
    
    var hintergrund: any;

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
        
        // Fest definierte Elemente

        //Himmel
        crc2.fillStyle = "#004ae0";
        crc2.fillRect(0, 0, 800, 600);

        //Berg2 (Hintergrund)
        crc2.fillStyle = "#666666";
        crc2.beginPath();
        crc2.moveTo(250, 100); //höhe
        crc2.lineTo(425, 450);
        crc2.lineTo(75, 450);
        crc2.fill();

        //Berg3 (Hintergrund)
        crc2.fillStyle = "#434343";
        crc2.beginPath();
        crc2.moveTo(450, 10); //höhe
        crc2.lineTo(625, 450);
        crc2.lineTo(275, 450);
        crc2.fill();

        //Skilift
        crc2.fillStyle = "424242"; //Seilbahn
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(800, 370);
        crc2.stroke();

        crc2.beginPath(); //Halteseil der Gondel
        crc2.moveTo(90, 130);
        crc2.lineTo(90, 150);
        crc2.stroke();

        crc2.fillStyle = "#303030";
        crc2.beginPath(); //Gondel
        crc2.moveTo(50, 135);
        crc2.lineTo(130, 160); //Dach der Gondel
        crc2.lineTo(130, 200); //Rechte Wand
        crc2.lineTo(50, 175); //Boden
        crc2.lineTo(50, 145); //Linke Wand
        crc2.fill();

        //Boden  
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 500, 800, 200);

        //Skipiste
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.moveTo(0, 230);
        crc2.lineTo(800, 500);
        crc2.lineTo(-800, 500);
        crc2.fill();

        ski = new Ski(Math.random() * 700 - 700, Math.random() * 100 + 260);
        ski.setRandomStyle();
        
        sun = new Sun(-100, Math.random() * 10 + 50);
        
        snow = new Snow(Math.random() * 800, Math.random() * 800 - 800);
        snow.setRandomStyle();
         
        hintergrund = crc2.getImageData(0, 0, 800, 600); // Lädt zuvor gelöschtes Bild wieder.

        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        crc2.putImageData(hintergrund, 0, 0); // Hier Hintergrund laden.
        ski.update();
        sun.update();
        snow.update();
        window.setTimeout(animate, 20);
    }
}