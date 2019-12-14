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
});
