const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options

  addition = String(addition)

  const buildAdditionString = () => {
    const additionString = []
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionString.push(addition)
    }
    return additionString.join(additionSeparator)
  }

  const repeated = []
  for (let i = 0; i < repeatTimes; i++) {
    repeated.push(str + buildAdditionString())
  }
  return repeated.join(separator)
}

module.exports = {
  repeater
};
