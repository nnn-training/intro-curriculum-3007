'use strict';

/**
 * test.jsの配列のうち、17で割り切れるものだけを返す関数
 * @param {number} n 
 * @returns 17の倍数
 */
function isMultipleOfSeventeen(n) {
  return n % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};