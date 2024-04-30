'use strict';

/**
 * 17 の倍数である場合 true を返す
 * @param {number} num
 * @returns {boolean}
 */
const mod=17
function isMultipleOfSeventeen(num){
    return num%mod===0;
}

module.exports = {
    isMultipleOfSeventeen
}
