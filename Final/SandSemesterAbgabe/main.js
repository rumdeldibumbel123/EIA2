var SemesterAbgabe;
(function (SemesterAbgabe) {
    var bg;
    var ship;
    var objs = [];
    var objStart = 1;
    var counter = 0;
    window.addEventListener("load", menu);
    function menu() {
        var div = document.getElementById("div");
        div.style.display = "block";
        var submit = document.createElement("button");
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
        var submit2 = document.createElement("button");
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
        var submit3 = document.createElement("button");
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
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        SemesterAbgabe.crc2 = canvas.getContext("2d");
        document.addEventListener("click", schuss);
        document.addEventListener("keydown", move);
        bg = new SemesterAbgabe.Background(0, 0);
        ship = new SemesterAbgabe.Ship(380, 450);
        for (var i = 0; i < objStart; i++) {
            var obj = new SemesterAbgabe.Asteroid(ship);
            objs.push(obj);
        }
        animate();
    }
    function move(_event) {
        if (_event.key == "a" || _event.key == "A") {
            ship.moveLeft();
        }
        if (_event.key == "d" || _event.key == "D") {
            ship.moveRight();
        }
    }
    function moveLeft() {
        ship.moveLeft();
    }
    function moveRight() {
        ship.moveRight();
    }
    function schuss() {
        ship.schussPosY.push(0);
        ship.schussPosX.push(0);
    }
    function animate() {
        SemesterAbgabe.crc2.clearRect(0, 0, 800, 600);
        bg.update();
        ship.update();
        counter += 0.1;
        SemesterAbgabe.crc2.fillStyle = "white";
        SemesterAbgabe.crc2.font = "30px Arial";
        SemesterAbgabe.crc2.fillText("Punkte: " + Math.round(counter), 35, 35);
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            obj.update();
            if (obj.yPos - 20 < ship.yPos && obj.yPos - 20 + 45 > ship.yPos && obj.xPos - 20 < ship.xPos && obj.xPos - 20 + 45 > ship.xPos || obj.yPos - 20 < ship.yPos && obj.yPos - 20 + 45 > ship.yPos && obj.xPos - 20 < ship.xPos + 50 && obj.xPos - 20 + 45 > ship.xPos + 50) {
                alert("GAME OVER");
                location.reload();
            }
            if (obj.yPos > 600 && objs.length < 15) {
                for (var i_1 = 0; i_1 < objStart; i_1++) {
                    var obj_1 = new SemesterAbgabe.Asteroid(ship);
                    objs.push(obj_1);
                }
            }
        }
        window.setTimeout(animate, 20);
    }
})(SemesterAbgabe || (SemesterAbgabe = {}));
//# sourceMappingURL=main.js.map