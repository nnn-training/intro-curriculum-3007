'use strict';
/**
 * 17の倍数である場合 true を返す
 * @param {number} num
 */

function isMultipleOfSeventeen() {
  return arguments[0] % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
