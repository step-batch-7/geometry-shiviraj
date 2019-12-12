const assert = require('assert');
const Line = require('../src/line.js');

describe('Line', () => {
  it('Should give line representation of positive points', () => {
    const testLine = new Line([2, 5], [4, 6]);
    const actual = testLine.toString();
    const expected = 'point1: {x: 2, y: 5}, point2: {x: 4, y: 6}';
    assert.deepStrictEqual(actual, expected);
  });

  it('Should give line representation of negative points', () => {
    const testLine = new Line([2, -5], [-4, 6]);
    const actual = testLine.toString();
    const expected = 'point1: {x: 2, y: -5}, point2: {x: -4, y: 6}';
    assert.deepStrictEqual(actual, expected);
  });
});
