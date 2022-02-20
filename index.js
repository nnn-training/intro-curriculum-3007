'use strict';
/**
 * 配列の中から17で割り切れるものだけを抽出する、マップ関数で抽出した数字のみで新しい配列を作成する
 * @param {number} num
 * @return true or false
 */
function isMultipleOfSeventeen(num){
  return num%17 === 0;
}

module.exports = { isMultipleOfSeventeen
}
