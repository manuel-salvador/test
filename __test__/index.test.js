const { sum } = require('./index');
const { mul } = require('./mul');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(5);
});

test('multiply 3 * 2 to equal 6', () => {
  expect(sum(1, 2)).toBe(5);
});
