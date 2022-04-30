const {NotImplementedError} = require('../extensions/index.js');
/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")

  const discardNext = '--discard-next'
  const discardPrev = '--discard-prev'
  const doubleNext = '--double-next'
  const doublePrev = '--double-prev'
  const commands = [discardNext, discardPrev, doubleNext, doublePrev]

  const transformed = []
  let i = 0
  while (i < arr.length) {
    if (!commands.includes(arr[i])) {
      transformed.push(arr[i])
      i++
      continue
    }

    if (transformed.length > 0) {
      if (arr[i] === discardPrev) {
        transformed.pop()
        i++
        continue
      }

      if (arr[i] === doublePrev) {
        if (transformed[transformed.length - 1] !== 'trash') {
          transformed.push(transformed[transformed.length - 1])
          i++
          continue
        } else {transformed.pop()}
      }

    }
    if (i < arr.length - 1) {
      if (arr[i] === discardNext) {
        transformed.push('trash')
        i += 2
        continue
      }
      if (arr[i] === doubleNext) {
        transformed.push(arr[i + 1])
        i++
        continue
      }
    }
    i++
  }
  return transformed
}

transform(
  [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]
)


module.exports = {
  transform
};
