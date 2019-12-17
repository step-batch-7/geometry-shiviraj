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
  get sides() {
    const side1 = new Line(this.endA, { x: this.endC.x, y: this.endA.y });
    const side2 = new Line({ x: this.endC.x, y: this.endA.y }, this.endC);
    const side3 = new Line(this.endC, { x: this.endA.x, y: this.endC.y });
    const side4 = new Line({ x: this.endA.x, y: this.endC.y }, this.endA);
    return [side1, side2, side3, side4];
  }
  get diagonals() {
    const endB = { x: this.endC.x, y: this.endA.y };
    const endD = { x: this.endA.x, y: this.endC.y };
    const diagonal1 = new Line(endB, endD);
    const diagonal2 = new Line(this.endA, this.endC);
    return [diagonal1, diagonal2];
  }
  get area() {
    return this.sides[0].length * this.sides[1].length;
  }
  get perimeter() {
    return 2 * (this.sides[0].length + this.sides[1].length);
  }
}
module.exports = Rectangle;
