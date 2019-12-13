const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y}),(${this.endB.x},${this.endB.y})`;
  }

  isEqual(other) {
    const isInstanceOfLine = other instanceof Line;
    if (!isInstanceOfLine) return false;
    const areEndsAEqual = arePointsEqual(this.endA, other.endA);
    const areEndsBEqual = arePointsEqual(this.endB, other.endB);
    return areEndsAEqual && areEndsBEqual;
  }
  get length() {
    const diffOfX = this.endA.x - this.endB.x;
    const diffOfY = this.endA.y - this.endB.y;
    return Math.sqrt(diffOfX ** 2 + diffOfY ** 2);
  }
  get slope() {
    const diffOfX = this.endA.x - this.endB.x;
    const diffOfY = this.endA.y - this.endB.y;
    return diffOfY / diffOfX;
  }
}

module.exports = Line;
