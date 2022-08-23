'use strict';

//配列に17の倍数だけを残すモジュールの実装

function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
