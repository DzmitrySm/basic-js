const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns1 = Math.pow(2,disksNumber) - 1
  let turnsPerSecond = turnsSpeed / 3600
  let seconds1 = Math.floor(turns1 / turnsPerSecond)
  let object = {turns: turns1, seconds: seconds1}
  return object
}

module.exports = {
  calculateHanoi
};
