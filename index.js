'use strict';

/**
 * 17 で割り切れるかどうかを判定する
 * @param {number} number
 * @return {boolean} 
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
