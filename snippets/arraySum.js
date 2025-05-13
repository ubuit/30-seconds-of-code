// snippets/arraySum.js
function arraySum(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Argument must be an array of numbers');
  }
  return arr.length === 0
    ? 0
    : arr.reduce((a, b) => a + b, 0);
}

module.exports = { arraySum };
