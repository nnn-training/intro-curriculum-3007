'use strict';
/**
 * 17 の倍数であれば、trueを返す関数
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen,
};
