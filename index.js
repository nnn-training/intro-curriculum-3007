'use strict';


//自身の回答

// function isMultipleOfSeventeen(numList) {
//   if ( numList % 17 === 0){
//     let number = numList;
//     return number;
//   }
// }  

// 模範解答
/**
 * 17の倍数である場合 true を返す
 * @param {number} num
 */
 function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
