'use strict';

/**
 * 17の倍数である場合 true を返す
 * @param {number} num
 */
function isMultipleOfSeventeen(number){
// return number % 17 === 0;
  if (number % 17 === 0) {
    return true;
  }else{
    return false;
  }
}

module.exports = {
  isMultipleOfSeventeen
}