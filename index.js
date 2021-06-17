'use strict';

/**
 * 17で割り切れるものだけにする
 * @return array
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}
module.exports = { isMultipleOfSeventeen };
