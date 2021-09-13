'use strict';

/**
 * 17の倍数である場合 true を返す
 * @param {number} int
 * @returns{booleran}
 * map は配列ではなく、配列に対して使える組み込み関数
 * 連想配列のmapとmap関数は別物
 * i には配列の中身が入ります,i はインデックスではなく中身
 * 
 */
function isMultipleOfSeventeen(int) {
  return int % 17 === 0;
}


// module.exports で指定したものが、require で読み込まれます
module.exports = {
  isMultipleOfSeventeen
};