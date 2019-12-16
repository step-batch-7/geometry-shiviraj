const assert = require('chai').assert;
const Line = require('../src/line');
const Point = require('../src/point');

describe('Line', () => {
  describe('toString', () => {
    it('Should give line representation of positive points', () => {
      const testLine = new Line({ x: 2, y: 5 }, { x: 4, y: 6 });
      const actual = testLine.toString();
      const expected = '[Line (2,5) to (4,6)]';
      assert.deepStrictEqual(actual, expected);
    });
    it('Should give line representation of negative points', () => {
      const testLine = new Line({ x: 2, y: -5 }, { x: -4, y: 6 });
      const actual = testLine.toString();
      const expected = '[Line (2,-5) to (-4,6)]';
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe('Equal Lines', () => {
    const line1 = new Line({ x: 2, y: 3 }, { x: 5, y: 9 });

    it('Should check if lines are equal', () => {
      const line2 = new Line({ x: 2, y: 3 }, { x: 5, y: 9 });
      const actual = line1.isEqualTo(line2);
      assert.isTrue(actual);
    });

    it('Should check if lines are not equal', () => {
      const line2 = new Line({ x: 2, y: 5 }, { x: 5, y: 3 });
      const actual = line1.isEqualTo(line2);
      assert.isFalse(actual);
    });

    it('Should check for if lines are not same type', () => {
      const actual = line1.isEqualTo('line2');
      assert.isFalse(actual);
    });

    it('Should check if lines have same end points', () => {
      const line1 = new Line({ x: 2, y: 5 }, { x: 5, y: 3 });
      const line2 = new Line({ x: 2, y: 5 }, { x: 5, y: 3 });
      const actual = line1.isEqualTo(line2);
      assert.isTrue(actual);
    });
  });

  describe('Length of Line', () => {
    it('Should give the length of line', () => {
      const line = new Line({ x: 0, y: 5 }, { x: 0, y: 0 });
      const actual = line.length;
      assert.deepStrictEqual(actual, 5);
    });

    it('Should give the length of line if points are negative', () => {
      const line = new Line({ x: -4, y: -6 }, { x: -1, y: -2 });
      const actual = line.length;
      assert.deepStrictEqual(actual, 5);
    });

    it('Should check the length in decimal', () => {
      const line = new Line({ x: -7, y: -6 }, { x: -2, y: -3 });
      const actual = line.length;
      assert.approximately(actual, 5.8, 0.1);
    });
  });

  describe('Slope of Line', () => {
    it('Should give the slope of line', () => {
      const line = new Line({ x: 4, y: 6 }, { x: 2, y: 2 });
      const actual = line.slope;
      assert.deepStrictEqual(actual, 2);
    });

    it('Should give the slope of line if points are negative', () => {
      const line = new Line({ x: -8, y: -9 }, { x: -5, y: -3 });
      const actual = line.slope;
      assert.deepStrictEqual(actual, 2);
    });

    it('Should give the slope of line in decimal', () => {
      const line = new Line({ x: -9, y: -6 }, { x: -3, y: 1 });
      const actual = line.slope;
      assert.approximately(actual, 1.16, 0.1);
    });
  });

  describe('Parallel Line', () => {
    it('Should check if two lines are parallel', () => {
      const line1 = new Line({ x: 0, y: 5 }, { x: 5, y: 5 });
      const line2 = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });
      const actual = line1.isParallelTo(line2);
      assert.isTrue(actual);
    });

    it('Should check if two lines are not in parallel', () => {
      const line1 = new Line({ x: 0, y: 5 }, { x: 5, y: 5 });
      const line2 = new Line({ x: 0, y: 0 }, { x: 3, y: 3 });
      const actual = line1.isParallelTo(line2);
      assert.isFalse(actual);
    });

    it('Should check if one is not a Line object', () => {
      const line1 = new Line({ x: 0, y: 5 }, { x: 5, y: 5 });
      const line2 = { endA: { x: 0, y: 0 }, endB: { x: 3, y: 3 }, slope: 0 };
      const actual = line1.isParallelTo(line2);
      assert.isFalse(actual);
    });

    it('Should check if line is overlapped', () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });
      const line2 = new Line({ x: 2, y: 0 }, { x: 4, y: 0 });
      const actual = line1.isParallelTo(line2);
      assert.isFalse(actual);
    });
  });

  describe('findX', () => {
    it('Should give the X value', () => {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });
      const actual = line.findX(3);
      assert.deepStrictEqual(actual, 3);
    });

    it('Should give the X value outside of line ', () => {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });
      const actual = line.findX(9);
      assert.isNaN(actual);
    });
  });

  describe('findY', () => {
    it('Should give the Y value', () => {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });
      const actual = line.findY(3);
      assert.deepStrictEqual(actual, 3);
    });

    it('Should give the Y value outside of line ', () => {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });
      const actual = line.findY(9);
      assert.isNaN(actual);
    });
  });

  describe('Split Line', () => {
    it('Should give two lines split at center', () => {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });
      const actual = line.split();
      const line1 = new Line({ x: 0, y: 0 }, { x: 2.5, y: 2.5 });
      const line2 = new Line({ x: 2.5, y: 2.5 }, { x: 5, y: 5 });
      assert.deepStrictEqual(actual, [line1, line2]);
    });
  });

  describe('has Point', () => {
    const line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });

    it('Should give true if point is on Line', () => {
      const point = new Point(2, 2);
      const actual = line.hasPoint(point);
      assert.isTrue(actual);
    });

    it('Should give false if point is not on Line', () => {
      const point = new Point(1, 2);
      const actual = line.hasPoint(point);
      assert.isFalse(actual);
    });

    it('Should give false if point is outside of line', () => {
      const point = new Point(7, 7);
      const actual = line.hasPoint(point);
      assert.isFalse(actual);
    });

    it('Should give false if point is not type of Point', () => {
      const actual = line.hasPoint('point');
      assert.isFalse(actual);
    });
  });

  describe('findPointFromStart', () => {
    it('Should give a point from the starting point on x axis', () => {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });
      const actual = line.findPointFromStart(2);
      const expected = new Point(2, 0);
      assert.deepStrictEqual(actual, expected);
    });

    it('Should give a point from the starting point on y axis', () => {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 5 });
      const actual = line.findPointFromStart(2);
      const expected = new Point(0, 2);
      assert.deepStrictEqual(actual, expected);
    });

    it('Should give a point from the starting point on x and y axis', () => {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });
      const actual = line.findPointFromStart(2);
      assert.approximately(actual.x, 1.41, 0.1);
      assert.approximately(actual.y, 1.41, 0.1);
    });
  });
});
