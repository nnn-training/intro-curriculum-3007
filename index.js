'use strict';


/**
 * 整数が 17 で割り切れるかどうかを判定
  * @param {number} num
 */

function isMultipleOfSeventeen(num) {
  if (num % 17 === 0) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  isMultipleOfSeventeen
}
