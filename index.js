'use strict';

/**
 * 17 の倍数である場合 true を返す
 * @param {number} num
 * @returns {boolean}
 */
function isMultipleOfSeventeen(number) {
  if (number % 17 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isMultipleOfSeventeen
}
