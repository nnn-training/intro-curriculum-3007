'use strict';

/**
 * 17で割り切れるかどうかを判定する
 * @param {Number} index 
 * @returns 
 */
function isMultipleOfSeventeen(index) {
    /* 回答
    if (index % 17 === 0) {
        return true
    } else {
        return false
    }
    */

    // 正解
    return index % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };