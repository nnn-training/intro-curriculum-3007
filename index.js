'use strict';

function isMultipleOfSeventeen(int) {
  if (int % 17 == 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isMultipleOfSeventeen
}
