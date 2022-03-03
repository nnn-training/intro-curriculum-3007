'use strict';

/**
 * 17で割り切れる数を抽出する
 * @param {number} num 
 * @returns 17の倍数
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen
};
