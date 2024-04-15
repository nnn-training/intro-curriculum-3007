'use strict';
const numbers = [];//{num: 数字, isMultipleOfSeventeen: t/f}
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {isMultipleOfSeventeen
}
