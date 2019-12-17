const Point = require('./point');
const Line = require('./line');

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
  }
  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endC = `(${this.endC.x},${this.endC.y})`;
    return `[Rectangle ${endA} to ${endC}]`;
  }
  get width() {
    return Math.abs(this.endC.x - this.endA.x);
  }
  get height() {
    return Math.abs(this.endC.y - this.endA.y);
  }
  get area() {
    return this.height * this.width;
  }
  get perimeter() {
    return 2 * (this.height + this.width);
  }
  isEqualTo(other) {
    return this.toString() === other.toString();
  }
  get sides() {
    const side1 = new Line(this.endA, { x: this.endC.x, y: this.endA.y });
    const side2 = new Line({ x: this.endC.x, y: this.endA.y }, this.endC);
    const side3 = new Line(this.endC, { x: this.endA.x, y: this.endC.y });
    const side4 = new Line({ x: this.endA.x, y: this.endC.y }, this.endA);
    return [side1, side2, side3, side4];
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return this.sides.some(side => point.isOn(side) == true);
  }
}
module.exports = Rectangle;
