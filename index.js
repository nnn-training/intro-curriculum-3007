'use strict';

/**
* 17の倍数である場合にtrueを返す
* @param{number} num
*/

function isMultipleOfSeventeen(number) {
  if (number % 17 === 0) {
    return ('true');
  }
}

module.exports = {
  isMultipleOfSeventeen
}
