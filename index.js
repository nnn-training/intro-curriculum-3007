'use strict';

/**
 * 整数を受け取って、17 で割り切れるか否かを返す
 * param {int} 
 * return {boolean} 
 */
function isMultipleOfSeventeen(p) {
    return p % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
