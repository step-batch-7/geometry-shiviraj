const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
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
  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    const c1 = this.endA.y - this.slope * this.endA.x;
    const c2 = other.endA.y - other.slope * other.endA.x;
    const d = (c1 - c2) / Math.sqrt(1 + this.slope ** 2);
    return this.slope == other.slope && d != 0;
  }
  findX(y) {
    let resultX = (y - this.endA.y) / this.slope + this.endA.x;
    if (resultX < this.endA.x || resultX > this.endB.x) resultX = NaN;
    return resultX;
  }
  findY(x) {
    let resultY = (x - this.endA.x) * this.slope + this.endA.y;
    if (resultY < this.endA.x || resultY > this.endB.x) resultY = NaN;
    return resultY;
  }
}

module.exports = Line;
