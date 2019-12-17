const assert = require('chai').assert;
const Rectangle = require('../src/rectangle');
const Point = require('../src/point');

describe('Rectangle', () => {
  describe('To String', () => {
    it('Should give string representation of Rectangle', () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.toString();
      const expected = '[Rectangle (1,1) to (5,4)]';
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe('Area', () => {
    it('Should give area of rectangle', () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      const actual = rectangle.area;
      assert.deepStrictEqual(actual, 20);
    });

    it('Should give area of rectangle ', () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 0 });
      const actual = rectangle.area;
      assert.deepStrictEqual(actual, 0);
    });
  });

  describe('Perimeter', () => {
    it('Should give perimeter of rectangle', () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      const actual = rectangle.perimeter;
      assert.deepStrictEqual(actual, 18);
    });

    it('Should give perimeter of rectangle ', () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 0 });
      const actual = rectangle.perimeter;
      assert.deepStrictEqual(actual, 10);
    });
  });
  describe('EqualTo', () => {
    const rectangle1 = new Rectangle({ x: 2, y: 3 }, { x: 5, y: 9 });

    it('Should check if rectangles are equal', () => {
      const rectangle2 = new Rectangle({ x: 2, y: 3 }, { x: 5, y: 9 });
      const actual = rectangle1.isEqualTo(rectangle2);
      assert.isTrue(actual);
    });

    it('Should check if rectangles are not equal', () => {
      const rectangle2 = new Rectangle({ x: 2, y: 5 }, { x: 5, y: 3 });
      const actual = rectangle1.isEqualTo(rectangle2);
      assert.isFalse(actual);
    });

    it('Should check for if rectangles are not same type', () => {
      const actual = rectangle1.isEqualTo('rectangle2');
      assert.isFalse(actual);
    });
  });

  describe('has Point', () => {
    const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });

    it('Should give true if point is on Rectangle', () => {
      const point = new Point(0, 2);
      assert.isTrue(rectangle.hasPoint(point));
    });

    it('Should give false if point is inside on Rectangle', () => {
      const point = new Point(1, 2);
      assert.isFalse(rectangle.hasPoint(point));
    });

    it('Should give false if point is outside of rectangle', () => {
      const point = new Point(7, 7);
      const actual = rectangle.hasPoint(point);
      assert.isFalse(actual);
    });

    it('Should give false if point is not type of Point', () => {
      const actual = rectangle.hasPoint('point');
      assert.isFalse(actual);
    });
  });
});
