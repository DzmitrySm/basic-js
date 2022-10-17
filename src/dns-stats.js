const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {}
  }
  let count = 0
  let key = ''
  let myMap = new Map()
  let reverseArr = domains.map(x => x.split(".").reverse())
  for (let i = 0; i < reverseArr.length; i++ ) {
    for(let j = 0; j < reverseArr[i].length; j++) {
      if (!myMap.has(`.${reverseArr[i][j]}`)) {
        key = key + `.${reverseArr[i][j]}`
        count = 1
        myMap.set(key, count)
        
      }
      else {
        myMap.set(`.${reverseArr[i][j]}`, myMap.get(`.${reverseArr[i][j]}`) + 1)
        key =''
      }
    }
  }
  console.log(reverseArr)
  console.log(myMap) 
  return Object.fromEntries(myMap)
  
}

module.exports = {
  getDNSStats
};
