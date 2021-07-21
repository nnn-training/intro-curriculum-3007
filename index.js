'use strict';
const number = 0;

/**
 * 引数が 17 で割り切れるかどうかを返す
 * @return {boolean}
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
