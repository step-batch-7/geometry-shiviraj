const Point = require('./point');

const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    const pointA = `(${this.endA.x},${this.endA.y})`;
    const pointB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${pointA} to ${pointB}]`;
  }
  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    const areEndsAEqual = arePointsEqual(this.endA, other.endA);
    const areEndsBEqual = arePointsEqual(this.endB, other.endB);
    return areEndsAEqual && areEndsBEqual;
  }
  get length() {
    const dX = this.endB.x - this.endA.x;
    const dY = this.endB.y - this.endA.y;
    return Math.hypot(dX, dY);
  }
  get slope() {
    const dX = this.endB.x - this.endA.x;
    const dY = this.endB.y - this.endA.y;
    return dY / dX;
  }
  get distOnYAxis() {
    return this.endA.y - this.slope * this.endA.x;
  }
  distanceFromPoint(point) {
    return Math.abs(
      (-this.slope * point.x + point.y - this.distOnYAxis) /
        Math.hypot(1, this.slope)
    );
  }
  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    const endPointOfLine = new Point(this.endA.x, this.endA.y);
    const distance = other.distanceFromPoint(endPointOfLine);
    return this.slope === other.slope && distance != 0;
  }
  findX(y) {
    let X = (y - this.endA.y) / this.slope + this.endA.x;
    const isXOutsideOfLine =
      (X < this.endA.x || X > this.endB.x) &&
      (X > this.endA.x || X < this.endB.x);
    if (isXOutsideOfLine) X = NaN;
    return X;
  }
  findY(x) {
    let Y = (x - this.endA.x) * this.slope + this.endA.y;
    const isYOutsideOfLine =
      (Y < this.endA.y || Y > this.endB.y) &&
      (Y > this.endA.y || Y < this.endB.y);
    if (isYOutsideOfLine) Y = NaN;
    return Y;
  }
  get middlePointOfLine() {
    const middleOfX = (this.endA.x + this.endB.x) / 2;
    const middleOfY = (this.endA.y + this.endB.y) / 2;
    return { x: middleOfX, y: middleOfY };
  }
  split() {
    const middlePoint = this.middlePointOfLine;
    const line1 = new Line(this.endA, middlePoint);
    const line2 = new Line(middlePoint, this.endB);
    return [line1, line2];
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return point.y === this.slope * point.x + this.distOnYAxis;
  }
}

module.exports = Line;
