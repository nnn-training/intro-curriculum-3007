'use strict';
/** 
 * 配列に含まれる整数が17で割り切れるものだけにする
 * filterメソッドを使うので戻り値はtrue/false
 * @param {numbers}  判定する値
 * @return true or false
 */
function isMultipleOfSeventeen(numbers){
    return numbers % 17 === 0;    
}
module.exports = {
    isMultipleOfSeventeen
}
