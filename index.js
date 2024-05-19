'use strict';

/**
 * 17の倍数の時trueを返す
 * @param {number} num 
 * @returns {boolean}
 */

function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
