const Point = require('./point');
const { PI } = Math;

class Circle {
  constructor(centre, radius) {
    this.centre = new Point(centre.x, centre.y);
    this.radius = radius;
  }
  toString() {
    const centre = `(${this.centre.x},${this.centre.y})`;
    return `[Circle @${centre} radius ${this.radius}]`;
  }
  isEqualTo(other) {
    if (!(other instanceof Circle)) return false;
    const areCentreEqual = this.centre.isEqualTo(other.centre);
    return areCentreEqual && this.radius === other.radius;
  }
  get area() {
    return PI * this.radius ** 2;
  }
  get perimeter() {
    return 2 * PI * this.radius;
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return (
      this.radius ** 2 ===
      (point.x - this.centre.x) ** 2 + (point.y - this.centre.y) ** 2
    );
  }
  moveTo(point) {
    this.centre = new Point(point.x, point.y);
    return this;
  }
  covers(point) {
    return this.radius >= this.centre.findDistanceTo(point);
  }
}

module.exports = Circle;
