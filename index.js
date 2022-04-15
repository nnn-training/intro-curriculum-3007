'use strict';

/**
 * 17で割り切れる値の場合、trueを返す
 * @param {number} numbers 
 * @returns 
 */
function isMultipleOfSeventeen(numbers) {
    if (numbers % 17 === 0) {
        return true;
    };
};

module.exports = {
    isMultipleOfSeventeen
};