const assert = require('chai').assert;
const Circle = require('../src/circle');

describe('Circle', () => {
  describe('to String', () => {
    it('Should represent circle in string format', () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const actual = circle.toString();
      const expected = `[Circle @(1,2) radius 5]`;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe('is Equal', () => {
    const circle1 = new Circle({ x: 2, y: 3 }, 5);

    it('Should check if circles are equal', () => {
      const circle2 = new Circle({ x: 2, y: 3 }, 5);
      const actual = circle1.isEqualTo(circle2);
      assert.isTrue(actual);
    });

    it('Should check if circles are not equal', () => {
      const circle2 = new Circle({ x: 2, y: 5 }, 5);
      const actual = circle1.isEqualTo(circle2);
      assert.isFalse(actual);
    });

    it('Should check for if circles are not same type', () => {
      const actual = circle1.isEqualTo('circle2');
      assert.isFalse(actual);
    });
  });
});
