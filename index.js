'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {number} number
 * @returns {booean}
 */
function isMultipleOfSeventeen(number) {
  const isMltipleOfSeventeen = number % 17 == 0;
  return isMltipleOfSeventeen;
}

module.exports = {
  isMultipleOfSeventeen,
};
