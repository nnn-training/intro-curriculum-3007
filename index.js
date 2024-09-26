'use strict';

/**
 * 整数が 17 で割り切れるかどうかを判定する
 * @param {Integer} val
 * @return {Boolean}
 */
function isMultipleOfSeventeen(val){
    return val % 17 === 0
}

module.exports = {
    isMultipleOfSeventeen
}
