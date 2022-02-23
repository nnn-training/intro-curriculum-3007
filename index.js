'use strict';

/**
 * TODOを追加する
 * @param {int} num
 */
function isMultipleOfSeventeen(num) {
  if (num % 17 === 0) {
    return true;
  } else {
    return false;
  }
}
  
module.exports = {
  isMultipleOfSeventeen
};
  
