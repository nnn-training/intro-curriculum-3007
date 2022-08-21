'use strict';

/**
 * 配列に含まれる整数が17で割り切れるものだけにする
 * @param {int} numberList
 */
function isMultipleOfSeventeen(number) {
    if (number % 17 === 0) {
        return true;
    };
}

module.exports = {
    isMultipleOfSeventeen
}
