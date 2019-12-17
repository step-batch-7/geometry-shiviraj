const Point = require('./point');
const { min, max, hypot } = Math;

const isNotInRange = function(start, end, no) {
  return no < min(start, end) || max(start, end) < no;
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    const pointA = `(${this.endA.x},${this.endA.y})`;
    const pointB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${pointA} to ${pointB}]`;
  }
  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    const areEndsAEqual = this.endA.isEqualTo(other.endA);
    const areEndsBEqual = this.endB.isEqualTo(other.endB);
    const isAEqualToB = this.endA.isEqualTo(other.endB);
    const isBEqualToA = this.endB.isEqualTo(other.endA);
    return (areEndsAEqual && areEndsBEqual) || (isBEqualToA && isAEqualToB);
  }
  get length() {
    const point = new Point(this.endA.x, this.endA.y);
    return point.findDistanceTo(this.endB);
  }
  get slope() {
    const dX = this.endB.x - this.endA.x;
    const dY = this.endB.y - this.endA.y;
    if (dY / dX != -Infinity) return dY / dX;
    return Infinity;
  }
  get yIntercept() {
    return this.endA.y - this.slope * this.endA.x;
  }
  distanceFromPoint(point) {
    return Math.abs(
      (this.slope * point.x - point.y + this.yIntercept) / hypot(1, this.slope)
    );
  }
  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    const endPointOfLine = new Point(this.endA.x, this.endA.y);
    const distance = other.distanceFromPoint(endPointOfLine);
    return this.slope === other.slope && distance != 0;
  }
  findX(y) {
    if (isNotInRange(this.endA.y, this.endB.y, y)) return NaN;
    return (y - this.endA.y) / this.slope + this.endA.x;
  }
  findY(x) {
    if (isNotInRange(this.endA.x, this.endB.x, x)) return NaN;
    return (x - this.endA.x) * this.slope + this.endA.y;
  }
  get midPoint() {
    const middleOfX = (this.endA.x + this.endB.x) / 2;
    const middleOfY = (this.endA.y + this.endB.y) / 2;
    return new Point(middleOfX, middleOfY);
  }
  split() {
    const line1 = new Line(this.endA, this.midPoint);
    const line2 = new Line(this.midPoint, this.endB);
    return [line1, line2];
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return this.findX(point.y) == point.x || point.y == this.findY(point.x);
  }
  findPointFromStart(dist) {
    if (isNotInRange(0, this.length, dist)) return null;
    const distRatio = dist / this.length;
    const X = distRatio * this.endB.x + (1 - distRatio) * this.endA.x;
    const Y = distRatio * this.endB.y + (1 - distRatio) * this.endA.y;
    return new Point(X, Y);
  }
  findPointFromEnd(dist) {
    return this.findPointFromStart(this.length - dist);
  }
}

module.exports = Line;
