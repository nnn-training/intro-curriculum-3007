'use strict';
// 数字を入れるための配列
const numbers = [];

/**
 * 整数が17で割り切れる場合 ture を返す
 * @param {number} num
 */

function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen }
