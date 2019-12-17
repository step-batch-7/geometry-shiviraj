const Point = require('./point');
const Line = require('./line');

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
    this.diagonal = new Line(this.endA, this.endC);
  }
  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endC = `(${this.endC.x},${this.endC.y})`;
    return `[Rectangle ${endA} to ${endC}]`;
  }
  get height() {
    return new Line(this.endA, { x: this.endA.x, y: this.endC.y });
  }
  get width() {
    return new Line(this.endA, { x: this.endC.x, y: this.endA.y });
  }
  get area() {
    return this.height.length * this.width.length;
  }
  get perimeter() {
    return 2 * (this.height.length + this.width.length);
  }
  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return this.diagonal.length === other.diagonal.length;
  }
}
module.exports = Rectangle;
