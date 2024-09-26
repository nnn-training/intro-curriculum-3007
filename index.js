'use strict';

/**
 * 17で割り切れるか判定
 * @param {number} task
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
