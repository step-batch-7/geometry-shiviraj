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
});
