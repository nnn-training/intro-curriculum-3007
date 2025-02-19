'use strict';

/**
 * 17 の倍数である場合 ture を返す
 * @param {num} num
 * @returns {boolean} 
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
