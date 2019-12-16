const Point = require('./point');
const { min, max, hypot } = Math;

const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const isBetween = function(start, end, no) {
  return min(start, end) <= no && no <= max(start, end);
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
    const point = new Point(this.endA.x, this.endA.y);
    return point.findDistanceTo(this.endB);
  }
  get slope() {
    const dX = this.endB.x - this.endA.x;
    const dY = this.endB.y - this.endA.y;
    return dY / dX;
  }
  get yIntercept() {
    return this.endA.y - this.slope * this.endA.x;
  }
  distanceFromPoint(point) {
    return Math.abs(
      (-this.slope * point.x + point.y - this.yIntercept) / hypot(1, this.slope)
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
  findPointFromStart(dist) {
    if(!isBetween(0, this.length, dist)) return null;
    const distRatio = dist / this.length;
    const X = (distRatio * this.endB.x + (1 - distRatio) * this.endA.x); 
    const Y = (distRatio * this.endB.y + (1 - distRatio) * this.endA.y); 
    return new Point(X, Y);
  }
  findPointFromEnd(dist) {
    return this.findPointFromStart(this.length - dist);
  }
}

module.exports = Line;
