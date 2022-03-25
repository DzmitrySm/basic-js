const { NotImplementedError } = require('../extensions/index.js');

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
 let str = n + ''
 let count = 0
 let arr = Array.from(str).map(x => +x).sort((a,b) => a - b)
let sliceArr = arr[0]
 for(let i = 0; i < str.length; i++) {
 if (str[i] === '0') {
   count = count + 1
 }
}if (count > 1) {
  return +str.replace(/0/,'')
}if (str.length > 2 && +str[0] < +str[1]) {
  return +str.replace(+str[0],'') 
}else {
 return +str.replace(sliceArr,'') 
 }
}

module.exports = {
  deleteDigit
};
