'use strict';

/**
 * 17の倍数である場合にtrueを返す
 * @param {number} n 
 */
function isMultipleOfSeventeen(n) {
  // test.jsとindex.jsを見た時に引数のことで疑問が湧いたらhttps://www.nnn.ed.nico/courses/999/chapters/13382に行くべし
  return n % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}