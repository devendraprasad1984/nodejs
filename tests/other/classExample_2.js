
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
Rectangle.prototype.area = function () {
    return this.w * this.h;
}
class Square extends Rectangle {
    constructor(w) {
        super()
        this.h = w;
        this.w = w;
    }
}
const rec = new Rectangle(3, 4);
const sqr = new Square(3);
console.log(rec.area());
console.log(sqr.area());


console.log("polygon class test")
class Polygon{
    constructor(sides) {
        this.sides=sides
    }
    perimeter() {
        return this.sides.reduce((v,a)=>a+v,0)
    }
}
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);
console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
