'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {number} num - 対象の数字
 * @return {boolean} 真偽値を返す
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}

