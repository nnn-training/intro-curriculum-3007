'use strict';

function isMultipleOfSeventeen (element){
    if (element % 17 === 0){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
