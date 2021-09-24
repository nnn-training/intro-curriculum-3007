'use strict';
/**
 * 配列に含まれる整数が17で割り切れるものだけにする
 * つまり、17で割り切れないものを削除すればよい？
 * 読込、判定、削除or戻し。
 * @param {integer} integer
 */
// seventeen.isMultipleOfSeventeen
// const integers = [];

// function isMultipleOfSeventeen(integer) {
//     integers.push(a);
//     for (const i = 0; i < integers.length; i++) {
//         if (integers[i] % 17 !== 0) {
//             integers.splice(integers[i], 1);
//         }
//     }
// }

function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen
}
