'use strict';

/**
 * 17で割り切れる数だけを返す関数
 * @param {string} numbers 
 * @returns 
 */
function isMultipleOfSeventeen(numbers) {
    return numbers % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
