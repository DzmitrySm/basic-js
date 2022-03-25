const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let flat = matrix.flat()
  if (matrix.length === 0) {
    return 0
  }
  let result = flat.map(x => x == '^^' ? 1:0).reduce((a,b) => a + b)
  return result
  
}

module.exports = {
  countCats
};
