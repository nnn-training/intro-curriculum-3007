'use strict';

const num = [];
// const num = [83, 32, 85, 47, 77, 8, 61, 74, 29, 34, 11, 76, 60, 99, 55, 7, 19, 60, 98, 38, 28, 96, 32];
// console.log(num.filter( n => n % 17 === 0 ));
// console.log(num % 17 === 0);

/**
 * 17で割り切れるものを返却する
 * @param {array} num 
 */
function isMultipleOfSeventeen(num){
    // return num.filter( n => n % 17 === 0 )
    return num % 17 === 0 
}
module.exports = {
    isMultipleOfSeventeen 
}
