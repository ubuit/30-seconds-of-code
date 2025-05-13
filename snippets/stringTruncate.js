function stringTruncate(str, length) {
  if (typeof str !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  if (!Number.isInteger(length) || length < 0) {
    throw new TypeError('Length must be a non-negative integer');
  }
  return str.length <= length ? str : str.slice(0, length) + '…';
}
module.exports = { stringTruncate };
