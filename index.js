'use strict';
/**
 * 与えられた数字が17 で割り切れるか判定する関数
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
