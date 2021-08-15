'use strict';

/**
 * 17の倍数の場合、true を返す
 * @oaram {number} num
 */
function isMultipleOfSeventeen (num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
