var L06_Class;
(function (L06_Class) {
    var Move = (function () {
        function Move(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Move.prototype.update = function () {
            this.move();
            this.draw();
        };
        Move.prototype.move = function () {
            // Sonst ist der Block leer.
        };
        Move.prototype.draw = function () {
            // Sonst ist der Block leer.
        };
        return Move;
    }());
    L06_Class.Move = Move;
})(L06_Class || (L06_Class = {}));
