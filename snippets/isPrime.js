// snippets/isPrime.js
function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }
  const limit = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = { isPrime };
