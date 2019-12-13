const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const areLinesEqual = function(lineA, lineB) {
  const areEndsAEqual = arePointsEqual(lineA.endA, lineB.endA);
  const areEndsBEqual = arePointsEqual(lineA.endB, lineB.endB);
  return areEndsAEqual && areEndsBEqual;
};

const areTypesEqual = function(lineA, lineB) {
  return lineA instanceof Line && lineB instanceof Line;
};

class Line {
  constructor(endA, endB) {
    this.endA = { ...endA };
    this.endB = { ...endB };
  }

  toString() {
    return `endA(${this.endA.x},${this.endA.y}), endB(${this.endB.x},${this.endB.y})`;
  }

  isEqual(other) {
    return areTypesEqual(this, other) && areLinesEqual(this, other);
  }
}

module.exports = Line;
