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
});
