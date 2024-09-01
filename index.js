'use strict';
/**
 * 17 の倍数である場合 true を返す
 * @param {number} num
 * @returns {boolean}
 */

function isMultipleOfSeventeen(num){
  if (num % 17 === 0){
    return true;
  } 
}

module.exports = {
  isMultipleOfSeventeen
};