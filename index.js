'use strict';

/**
 * 17の倍数である場合にtrueを返す
 * @param {number}
 */
function isMultipleOfSeventeen(number){
  // console.log(number);
  if(number%17 === 0){
    // console.log('true');
    return true;
  }else{
    return false;
  }
}

module.exports = {
  isMultipleOfSeventeen
}
