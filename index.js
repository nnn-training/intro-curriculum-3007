'use strict';
/*
 * 入力された整数が 17 で割り切れるかどうかを返す
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0
}

module.exports = {
    isMultipleOfSeventeen
}
