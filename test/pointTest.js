const assert = require('chai').assert;
const Point = require('../src/point');
const Line = require('../src/line');
const Circle = require('../src/circle');

describe('Point', () => {
  describe('to String', () => {
    it('Should represent point in String form', () => {
      const point = new Point(2, 3);
      const actual = point.toString();
      assert.deepStrictEqual(actual, '[Point @(2,3)]');
    });
  });

  describe('visit', () => {
    it('Should give the result according to function of sum', () => {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x + y);
      assert.deepStrictEqual(actual, 5);
    });

    it('Should give the result according to function of difference', () => {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x - y);
      assert.deepStrictEqual(actual, -1);
    });

    it('Should give the result according to function of product', () => {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x * y);
      assert.deepStrictEqual(actual, 6);
    });
  });

  describe('Equal Points', () => {
    const point1 = new Point(2, 3);

    it('Should check if points are equal', () => {
      const point2 = new Point(2, 3);
      const actual = point1.isEqualTo(point2);
      assert.isTrue(actual);
    });

    it('Should check if points are not equal', () => {
      const point2 = new Point(2, 5);
      const actual = point1.isEqualTo(point2);
      assert.isFalse(actual);
    });

    it('Should check for if points are not same type', () => {
      const actual = point1.isEqualTo('point2');
      assert.isFalse(actual);
    });
  });

  describe('Clone Point', () => {
    it('Should check if clone point is same as original point', () => {
      const point1 = new Point(2, 3);
      const point2 = point1.clone();
      assert.deepStrictEqual(point1, point2);
    });
  });

  describe('findDistance', () => {
    it('Should distance between two point', () => {
      const point1 = new Point(0, 0);
      const point2 = new Point(0, 5);
      assert.deepStrictEqual(point1.findDistanceTo(point2), 5);
    });
  });

  describe('is On Line', () => {
    const line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });

    it('Should give true if point is on line', () => {
      const point = new Point(2, 2);
      assert.isTrue(point.isOn(line));
    });

    it('Should give false if point is not on line', () => {
      const point = new Point(2, 3);
      assert.isFalse(point.isOn(line));
    });

    it('Should give false if point is outside of line', () => {
      const point = new Point(6, 6);
      assert.isFalse(point.isOn(line));
    });
  });

  describe('is On Circle', () => {
    const circle = new Circle({ x: 0, y: 0 }, 5);

    it('Should give true if point is on circle', () => {
      const point = new Point(0, 5);
      assert.isTrue(point.isOn(circle));
    });

    it('Should give false if point is not on circle', () => {
      const point = new Point(2, 3);
      assert.isFalse(point.isOn(circle));
    });

    it('Should give false if point is outside of circle', () => {
      const point = new Point(6, 6);
      assert.isFalse(point.isOn(circle));
    });
  });
});
