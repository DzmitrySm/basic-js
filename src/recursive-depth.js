const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
  let count = 0
  let modifyArr = JSON.stringify(arr)
  console.log(modifyArr)
  let destArr = Array.from(modifyArr)
  let filterArr = destArr.filter(el => el === "[" || el === "]")
  let string = filterArr.join("")
  while (string.length !== 0) {
    string = string.replace(/\[\]/g, "")
    count = count + 1
    if (Array.isArray(string[i])) {
      while(Array.isArray(string[i])) {
        count = count + 1 
        string[i].flat()
      }
    }
  }
  return count
  
  //console.log(destArr)
  //console.log(filterARr2)
 // return Math.min((filterArr.length + 1), (filterARr2.length + 1))
  //let count = 1
 // for (let i = 0; i < arr.length; i++) {
   // if (Array.isArray(arr[i])) {
    //  arr[i] = arr[i].flat()
   //   count = count + 1
   // }
  //  return count
    
 // }
}
}




module.exports = {
  DepthCalculator
};
