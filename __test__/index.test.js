const { sum } = require('./index.js');
const { mul } = require('./mul.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply 3 * 2 to equal 6', () => {
  expect(mul(1, 2)).toBe(5);
});
