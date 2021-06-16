'use strict';

function isMultipleOfSeventeen(Number){
    if((Number % 17) === 0){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
};
