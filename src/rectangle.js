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
    return this.endA.isEqualTo(other.endA) && this.endC.isEqualTo(other.endC);
  }
}
module.exports = Rectangle;
