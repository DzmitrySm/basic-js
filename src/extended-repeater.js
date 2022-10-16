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
 * addition: 'PLUS', : 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
 let newArr = []
  if (options.repeatTimes === 1 && !options.separator && !options.addition) {
    return str
  }
  for (let i = 0; i < options.repeatTimes; i++) {
  if(options.repeatTimes > 1 && !options.separator && !options.additionSeparator) {
  newArr.push(str, '+')
  }
  if(options.repeatTimes > 1 && options.separator && !options.addition) {
    newArr.push(str, options.separator)
 }
 if(options.repeatTimes > 1 && options.separator && options.addition && options.additionRepeatTimes && !options.additionSeparator) {
  newArr.push(str, options.addition, options.separator)
  }
  if (!options.repeatTimes && !options.additionRepeatTimes) {
    newArr.push(str, options.addition)
  }
  if(options.repeatTimes > 1 && options.separator && options.additionSeparator && options.addition) {
    newArr.push(str, (options.addition+options.additionSeparator).repeat(options.additionRepeatTimes - 1), options.addition, options.separator)
 }
  }
  
  return newArr.slice(0, newArr.length - 1).join('')
  
}

module.exports = {
  repeater
};
