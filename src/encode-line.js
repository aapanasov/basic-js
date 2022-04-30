const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = []
  let result = ''
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      arr.push([counter, str[i]]);
      counter = 1;
    }
  }

  for (let pair of arr) {
    if (pair[0] > 1) {
      result += pair[0] + pair[1]
    } else {result += pair[1]}
  }

  return result
}






console.log(encodeLine('abbcca'))

module.exports = {
  encodeLine
};
