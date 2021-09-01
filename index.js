'use strict';

/**
 * 
 * @param {integer} digit 
 */
function isMultipleOfSeventeen(digit){
    if(digit % 17===0){
        return true;
    }

    return false;
}
module.exports = {
    isMultipleOfSeventeen
}
