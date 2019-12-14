const assert = require('chai').assert;
const Point = require('../src/point');

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
});
