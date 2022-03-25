const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!'
  }
  let myDate = new Date (date)
  if (date instanceof Date === false || Object.keys(date).length > 0) {
    throw new Error('Invalid date!')
  }if(myDate.getMonth() === 11 || myDate.getMonth() === 0|| myDate.getMonth() === 1) {
    return 'winter'
  }if(myDate.getMonth() === 2 || myDate.getMonth() === 3|| myDate.getMonth() === 4) {
    return 'spring'
  }if(myDate.getMonth() === 5 || myDate.getMonth() === 6 || myDate.getMonth() === 7) {
    return 'summer'
  }if(myDate.getMonth() === 8 || myDate.getMonth() === 9|| myDate.getMonth() === 10) {
    return 'autumn'
  }

 
}

module.exports = {
  getSeason
};
