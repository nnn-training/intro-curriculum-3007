'use strict';

/**
 * 整数が17で割り切れるか判定
 * @param num {Number}
 * @return 整数が17で割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
