'use strict';

/**
 * 17の倍数かを判定する(true: 17の倍数, false: 17の倍数以外)
 * @param {number} num 判定する値
 * @returns 判定結果
 */
function isMultipleOfSeventeen(num){
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
