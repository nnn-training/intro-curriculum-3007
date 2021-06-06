"use strict";

/**
 * 17で割り切れる整数を返す
 * @param {num} num
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen,
};
