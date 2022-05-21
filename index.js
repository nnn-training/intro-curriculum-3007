'use strict';
// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
const tasks = [];
/**
 * 17の倍数である場合 true を返す
 * @param {number} num
 */
 function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
 }

module.exports = {isMultipleOfSeventeen
}
