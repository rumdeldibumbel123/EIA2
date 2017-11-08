namespace L04_InterfaceArray {

    interface SquareInfo {

        x: number;

        y: number;

        dx: number;

        dy: number;

        color: string;

    }



    window.addEventListener("load", init);

    let crc2: CanvasRenderingContext2D;

    let squares: SquareInfo[] = [];





    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        console.log(canvas);



        crc2 = canvas.getContext("2d");

        console.log(crc2);



        console.log("setTimeout");

        animate();



        for (let i: number = 0; i < 100; i++) {

            squares[i] = {

                x: 200,

                y: 100,

                dx: Math.random() * 2 - 1,

                dy: Math.random() * 2 - 1,

                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"

            };

        }



        // hier Hintergrund speichern

    }



    function animate(): void {

        console.log("Timeout");

        crc2.clearRect(0, 0, 400, 300); // hier Hintergrund restaurieren



        for (let i: number = 0; i < squares.length; i++) {

            moveAndDrawSquare( squares[i] );

        }



        window.setTimeout(animate, 20);

    }



    function moveAndDrawSquare(_square: SquareInfo): void {

        _square.x += _square.dx;

        _square.y += _square.dy; // andere Bewegungsmuster zu finden

        crc2.fillStyle = _square.color;

        crc2.fillRect(_square.x, _square.y, 20, 20);

    }

}