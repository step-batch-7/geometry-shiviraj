const assert = require('assert');
const Line = require('../src/line.js');

describe('Line', () => {
  it('Should give line representation of positive points', () => {
    const testLine = new Line({ x: 2, y: 5 }, { x: 4, y: 6 });
    const actual = testLine.toString();
    const expected = 'endA(2,5), endB(4,6)';
    assert.deepStrictEqual(actual, expected);
  });

  it('Should give line representation of negative points', () => {
    const testLine = new Line({ x: 2, y: -5 }, { x: -4, y: 6 });
    const actual = testLine.toString();
    const expected = 'endA(2,-5), endB(-4,6)';
    assert.deepStrictEqual(actual, expected);
  });
});

describe('Equal Lines', () => {
  const line1 = new Line({ x: 2, y: 3 }, { x: 5, y: 9 });
  it('Should check if lines are equal', () => {
    const line2 = new Line({ x: 2, y: 3 }, { x: 5, y: 9 });
    const actual = line1.isEqual(line2);
    assert.deepStrictEqual(actual, true);
  });

  it('Should check if lines are not equal', () => {
    const line2 = new Line({ x: 2, y: 5 }, { x: 5, y: 3 });
    const actual = line1.isEqual(line2);
    assert.deepStrictEqual(actual, false);
  });

  it('Should check for if lines are not same type', () => {
    const actual = line1.isEqual('line2');
    assert.deepStrictEqual(actual, false);
  });
});
