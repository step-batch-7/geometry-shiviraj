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
    const areRadiusEqual = this.radius === other.radius;
    return areCentreEqual && areRadiusEqual;
  }
  get area() {
    return PI * this.radius ** 2;
  }
  get perimeter() {
    return 2 * PI * this.radius;
  }
}

module.exports = Circle;
