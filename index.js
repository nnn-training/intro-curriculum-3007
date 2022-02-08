'use strict';
// 配列に含まれる整数が17で割り切れるものだけにする、seventeen モジュールを実装する。
// 整数が17で割り切れるかどうかを判定する isMultipleOfSeventeen関数をseventeenモジュールに実装せよ

/**
 * 17の倍数の場合、trueを返す。
 * @param {number} num 
 */

function  isMultipleOfSeventeen(num){
    return num % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen 
}
