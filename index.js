'use strict';

/**
 * 17で割り切れる数値だけを判定しtrueを返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;  
}

module.exports = { isMultipleOfSeventeen };
