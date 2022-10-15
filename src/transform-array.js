const { NotImplementedError } = require('../extensions/index.js');

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
 transform 
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!")
  }
 if (arr.length === 0) {
   return []
 }
  let arr1 = []
  for(let i = 0; i < arr.length; i++) {
    if ( arr[i] !== '--double-next' && arr[i] !== '--discard-next'  && arr[i] !== '--double-prev' && arr[i] !== '--discard-prev') {
      arr1.push(arr[i])
    }
    
    if (arr[i] === '--double-next' && arr[i + 1]) {
      arr1.push(arr[i + 1])
    }
    if (arr[i] === '--double-prev' && arr[i - 1]) {
     arr1.push(arr[i - 1])
   }
  if(arr[i] === '--discard-next' && arr[i+2] === '--double-prev') {
    i = i + 2
  }
  
  if (arr[i] === '--discard-prev' && arr[i - 1]) {
   
   arr1.pop()
   } 
 }
return arr1
    //return arr1.filter(el => el !== '--double-next' && el !== '--discard-next'  && el !== '--double-prev' && el !== '--discard-prev')
  }




 


module.exports = {
  transform
};
