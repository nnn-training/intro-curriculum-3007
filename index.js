'use strict';
const a = [];

/**
 * 17の倍数である場合 ture を返す
 * @param {number} num
 */

function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
