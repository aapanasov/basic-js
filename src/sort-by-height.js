const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusOnes = []
  const filterred = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) minusOnes.push(i)
    else filterred.push(arr[i])
  }

  filterred.sort((a, b) => a - b)

  for (let index of minusOnes) {
    filterred.splice(index, 0, -1)
  }

  return filterred
}


module.exports = {
  sortByHeight
};
