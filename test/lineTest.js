const assert = require('chai').assert;
const Line = require('../src/line.js');

describe('Line', () => {
  describe('toString', () => {
    it('Should give line representation of positive points', () => {
      const testLine = new Line({ x: 2, y: 5 }, { x: 4, y: 6 });
      const actual = testLine.toString();
      const expected = 'Line (2,5),(4,6)';
      assert.deepStrictEqual(actual, expected);
    });
    it('Should give line representation of negative points', () => {
      const testLine = new Line({ x: 2, y: -5 }, { x: -4, y: 6 });
      const actual = testLine.toString();
      const expected = 'Line (2,-5),(-4,6)';
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe('Equal Lines', () => {
    const line1 = new Line({ x: 2, y: 3 }, { x: 5, y: 9 });

    it('Should check if lines are equal', () => {
      const line2 = new Line({ x: 2, y: 3 }, { x: 5, y: 9 });
      const actual = line1.isEqual(line2);
      assert.isTrue(actual);
    });

    it('Should check if lines are not equal', () => {
      const line2 = new Line({ x: 2, y: 5 }, { x: 5, y: 3 });
      const actual = line1.isEqual(line2);
      assert.isFalse(actual);
    });

    it('Should check for if lines are not same type', () => {
      const actual = line1.isEqual('line2');
      assert.isFalse(actual);
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
});
