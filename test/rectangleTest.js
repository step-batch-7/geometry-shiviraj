const assert = require('chai').assert;
const Rectangle = require('../src/rectangle');

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
});
