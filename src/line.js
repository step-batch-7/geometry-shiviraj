const { min, max, hypot } = Math;
const Point = require('./point');

const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const isBetween = function(range1, range2, no) {
  return min(range1, range2) <= no && no <= max(range1, range2);
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
    return hypot(dX, dY);
  }
  get slope() {
    const dX = this.endB.x - this.endA.x;
    const dY = this.endB.y - this.endA.y;
    return dY / dX;
  }
  get yIntercept() {
    return this.endA.y - this.slope * this.endA.x;
  }
  isParallelTo(other) {
    if (!(other instanceof Line) || this.yIntercept == other.yIntercept)
      return false;
    return this.slope === other.slope;
  }
  findX(y) {
    let X = (y - this.endA.y) / this.slope + this.endA.x;
    if (!isBetween(this.endA.x, this.endB.x, X)) X = NaN;
    return X;
  }
  findY(x) {
    let Y = (x - this.endA.x) * this.slope + this.endA.y;
    if (!isBetween(this.endA.y, this.endB.y, Y)) Y = NaN;
    return Y;
  }
  get midPoint() {
    const middleOfX = (this.endA.x + this.endB.x) / 2;
    const middleOfY = (this.endA.y + this.endB.y) / 2;
    return { x: middleOfX, y: middleOfY };
  }
  split() {
    const line1 = new Line(this.endA, this.midPoint);
    const line2 = new Line(this.midPoint, this.endB);
    return [line1, line2];
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return this.findX(point.y) === point.x && this.findY(point.x) === point.y;
  }
}

module.exports = Line;
