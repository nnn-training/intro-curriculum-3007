'use strict';

/**
 * 17の倍数の時trueを返す関数
 * @param {number} num
 * @returns 
 */
function isMultipleOfSeventeen (num) {
    return num % 17 === 0;
}


module.exports = { isMultipleOfSeventeen };
