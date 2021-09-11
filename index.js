'use strict';

// 配列に含まれる整数が 17 で割り切れるものだけにする

function isMultipleOfSeventeeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeeen,
}
