const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false
  }
  let filterArr = members.filter(a => typeof(a) === 'string')
  if(!filterArr.length) {
    return false
  }
  let mapArr = filterArr.map(x => x.trim().toUpperCase()[0]).sort().reduce((a,b) => a + b) 
  return mapArr
}

module.exports = {
  createDreamTeam
};
