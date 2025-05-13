const { stringTruncate } = require('../snippets/stringTruncate');

test('truncates long strings correctly', () => {
  expect(stringTruncate('hello world', 5)).toBe('hello…');
});
test('returns empty string unchanged', () => {
  expect(stringTruncate('', 3)).toBe('');
});
test('throws on non-string input', () => {
  expect(() => stringTruncate(123, 2))
    .toThrow('First argument must be a string');
});
test('throws on negative length', () => {
  expect(() => stringTruncate('abc', -1))
    .toThrow('Length must be a non-negative integer');
});
