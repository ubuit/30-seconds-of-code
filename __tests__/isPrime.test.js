// __tests__/isPrime.test.js
const { isPrime } = require('../snippets/isPrime');

test('2 is prime', () => {
  expect(isPrime(2)).toBe(true);
});

test('1 is not prime', () => {
  expect(isPrime(1)).toBe(false);
});

test('negative numbers are not prime', () => {
  expect(isPrime(-7)).toBe(false);
});

test('non-integer input is not prime', () => {
  expect(isPrime(3.5)).toBe(false);
});

test('97 is prime', () => {
  expect(isPrime(97)).toBe(true);
});

test('100 is not prime', () => {
  expect(isPrime(100)).toBe(false);
});
