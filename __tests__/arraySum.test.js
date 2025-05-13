// __tests__/arraySum.test.js
const { arraySum } = require('../snippets/arraySum');
test('sums array elements', () => {
  expect(arraySum([1, 2, 3, 4])).toBe(10);
});

test('returns 0 for empty array', () => {
  expect(arraySum([])).toBe(0);
});

test('throws on non-array input', () => {
  expect(() => arraySum('not an array')).toThrow(
    'Argument must be an array of numbers'
  );
});
