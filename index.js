'use strict';

/**
 * 17で割り切れる数かどうか判定します。
 * @param {Number} number 
 * @returns 17で割り切れるならtrueを返します
 */
function isMultipleOfSeventeen(number) {
    return number %17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
