'use strict';

/**
 * 17で割り切れる値だけを返す関数
 */
function isMultipleOfSeventeen(value) {
    return value % 17 === 0
}


module.exports = {
    isMultipleOfSeventeen
}
