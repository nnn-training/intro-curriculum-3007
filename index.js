'use strict';

/**
 * 17で割り切れる数のみを返す
 * @param {number} n
 */
 function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
} 
module.exports = {
    isMultipleOfSeventeen
}
