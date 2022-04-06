'use strict';
/**
 * 引数のうちfilterで17で割った余りが0のものだけ返す
 */
const num = [];

function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
