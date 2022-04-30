const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n).split('')
  let max = 0
  let maxDigits
  for (let i = 0; i < digits.length; i++) {
    const newDigits = [...digits.slice(0, i), ...digits.slice(i + 1, digits.length)]
    const newMax = +newDigits.join('')
    if (newMax > max) {
      max = newMax
      maxDigits = newDigits
    }
  }
  return +maxDigits.join('')
}

module.exports = {
  deleteDigit
};
