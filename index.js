'use strict';
/**
 * 渡された数が17で割り切れる場合、trueに
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    const result = (num % 17 === 0);
    return result;
}


module.exports = {
    isMultipleOfSeventeen
}
