'use strict';
/**
 * 配列に含まれる整数が17で割り切れるものだけにする
 * つまり、17で割り切れないものを削除すればよい？
 * 読込、判定、削除or戻し。
 * @param {integer} integer
 */
// seventeen.isMultipleOfSeventeen
const integers = [];
function isMultipleOfSeventeen(integer) {
    for (const i = 0; i <= integers.length; i++) {
        if (integers[i] % 17 !== 0) {
            integers[i].splice(integers[i], 1);
        }
    }
}






module.exports = {
}
