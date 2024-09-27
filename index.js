'use strict';

/**
 * 渡された整数が17で割り切れるか判定する
 * @param {number} num
 */

function isMultipleOfSeventeen(num) {
    if (num%17 === 0) {
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
