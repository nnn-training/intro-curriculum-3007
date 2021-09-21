'use strict';
/**
 * 
 * @param {number} number
 * @returns 17の倍数である場合 true を返す
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};