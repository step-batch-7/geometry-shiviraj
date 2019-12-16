const assert = require('chai').assert;
const Circle = require('../src/circle');
const Point = require('../src/point');

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

  describe('Area', () => {
    it('Should give the area of circle', () => {
      const circle = new Circle({ x: 2, y: 3 }, 7);
      assert.approximately(circle.area, 154, 0.1);
    });
  });

  describe('Perimeter', () => {
    it('Should give the perimeter of circle', () => {
      const circle = new Circle({ x: 2, y: 3 }, 7);
      assert.approximately(circle.perimeter, 44, 0.1);
    });
  });

  describe('has Point', () => {
    const circle = new Circle({ x: 0, y: 0 }, 5);

    it('Should give true if point is on Circle', () => {
      const point = new Point(0, 5);
      const actual = circle.hasPoint(point);
      assert.isTrue(actual);
    });

    it('Should give false if point is not on Circle', () => {
      const point = new Point(1, 2);
      const actual = circle.hasPoint(point);
      assert.isFalse(actual);
    });

    it('Should give false if point is outside of circle', () => {
      const point = new Point(7, 7);
      const actual = circle.hasPoint(point);
      assert.isFalse(actual);
    });

    it('Should give false if point is not type of Point', () => {
      const actual = circle.hasPoint('point');
      assert.isFalse(actual);
    });
  });
});
