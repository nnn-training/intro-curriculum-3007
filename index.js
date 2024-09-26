'use strict';

/**
 * 配列に含まれる整数を17で割り切れるものだけにする
 * @param{number} number
 */
function isMultipleOfSeventeen(number){
   return number%17===0   
}
module.exports = {
    isMultipleOfSeventeen
};
