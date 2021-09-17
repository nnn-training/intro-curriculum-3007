'use strict';


/**
 * テストが配列メソッドの .filter なので、17の倍数であればtrueを返す関数を作成
 * @param {int} number 
 */
function isMultipleOfSeventeen (number){
  return number % 17 === 0;
}
module.exports = { isMultipleOfSeventeen
};
