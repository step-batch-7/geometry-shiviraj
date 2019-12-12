class Line {
  constructor(point1, point2) {
    this.point1 = { x: point1[0], y: point1[1] };
    this.point2 = { x: point2[0], y: point2[1] };
  }
  toString() {
    return (
      `point1: {x: ${this.point1.x}, y: ${this.point1.y}}, ` +
      `point2: {x: ${this.point2.x}, y: ${this.point2.y}}`
    );
  }
}

module.exports = Line;
