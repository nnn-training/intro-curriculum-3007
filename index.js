'use strict';

/**
 * 17の倍数の場合、trueを返す
 * @param {number} num
 * @returns 
 */
function isMultipleOfSeventeen (number) {
  return number % 17 === 0
}

module.exports = {
  isMultipleOfSeventeen
}