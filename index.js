'use strict';
/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {Number} number
 * @return {Boolean}
 */
function isMultipleOfSeventeen(number){
    return number%17 === 0;
}
module.exports = {
    isMultipleOfSeventeen
}