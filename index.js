'use strict';
/**
 * 17 の倍数である場合 true を返す
 * @param {number} num
 * @returns {boolean}
 */

function isMultipleOfSeventeen(numbers) {
  return numbers % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
