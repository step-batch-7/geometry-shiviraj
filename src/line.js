const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const areTypesEqual = function(lineA, lineB) {
  return lineA instanceof Line && lineB instanceof Line;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    return `endA(${this.endA.x},${this.endA.y}), endB(${this.endB.x},${this.endB.y})`;
  }

  isEqual(other) {
    const isTypeEqual = areTypesEqual(this, other);
    const isEndAEqual = arePointsEqual(this.endA, other.endA);
    const isEndBEqual = arePointsEqual(this.endB, other.endB);
    return isTypeEqual && isEndAEqual && isEndBEqual;
  }
}

module.exports = Line;
