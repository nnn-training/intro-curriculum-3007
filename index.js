'use strict';

/**
 * 17で割り切れるか
 * @param {int}
 * @return {boolean}
 */
function isMultipleOfSeventeen(inValue) {
	return inValue % 17 === 0;
}

module.exports = {
	isMultipleOfSeventeen
}
