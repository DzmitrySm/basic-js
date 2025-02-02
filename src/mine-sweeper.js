const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (matrix.length === 0) {
    return false
  }
  let countBombs = 0
for(let i = 0; i < matrix.length; i++) {
  for(let j = 0; i < matrix[j].length; j++){
   if (matrix[i][j+1] === true) {
    countBombs += 1
    break
   }if (matrix[i+1][j] === true) {
    countBombs += 1
    break
   }
   if (matrix[i+1][j+1] === true) {
    countBombs += 1
    break
   }matrix[i][j] = countBombs



}
}
return matrix
}
module.exports = {
  minesweeper
};
