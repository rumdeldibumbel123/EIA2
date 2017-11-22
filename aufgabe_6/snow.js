var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L06_Class;
(function (L06_Class) {
    var Snow = (function (_super) {
        __extends(Snow, _super);
        function Snow(_x, _y) {
            _super.call(this, _x, _y);
            this.dx = Math.random() * 2 - 1;
            this.dy = Math.random() * 1 + 1;
            this.color = "#FFFFFF";
        }
        Snow.prototype.move = function () {
            if (this.y > 800) {
                this.x = Math.random() * 800;
                this.y = Math.random() * 800 - 800;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        Snow.prototype.draw = function () {
            L06_Class.crc2.beginPath();
            L06_Class.crc2.moveTo(this.x, this.y);
            L06_Class.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            L06_Class.crc2.fill();
            L06_Class.crc2.closePath();
            L06_Class.crc2.fillStyle = this.color;
            L06_Class.crc2.fill();
        };
        return Snow;
    }(L06_Class.Move));
    L06_Class.Snow = Snow;
})(L06_Class || (L06_Class = {}));
