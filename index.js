'use strict';

/**
 * 17の倍数である場合trueを返す
 * @param {number} num 
 * @return - 17の倍数である場合true
 */
const isMultipleOfSeventeen = (num => num % 17 === 0);

module.exports = { isMultipleOfSeventeen };
