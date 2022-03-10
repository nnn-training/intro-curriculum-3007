'use strict';

/**
 * 与えられた整数が17の倍数か判定する
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
