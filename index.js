'use strict';

/**
 * 整数が17で割り切れるか判定する
 * @param {int} num
 * @returns boolean
 */
 function isMultipleOfSeventeen(num) {
  // numが17で割り切れればtrueを返す
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
