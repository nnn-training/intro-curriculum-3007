'use strict';

/**
 * 17で割り切れる数の配列を取得する
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen }