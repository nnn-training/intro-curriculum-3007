'use strict';

/**
 * 17の倍数の時　tureを返す関数
 * @param {number} num 
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
