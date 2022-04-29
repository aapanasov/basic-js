const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const str1 = s1.split('')
  const str2 = s2.split('')

  str1.forEach(char => {
    if (str2.includes(char)) {
      count++;
      str2.splice(str2.indexOf(char), 1)
    }
  });

  return count
}

console.log(getCommonCharacterCount(
  'zzzz', 'zzzzzzz'
))

module.exports = {
  getCommonCharacterCount
};
