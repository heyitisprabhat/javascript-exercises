const removeFromArray = function( arr, ...valuesToExclude) {
    return arr.filter( item => !valuesToExclude.includes(item))
};

removeFromArray([1,2,3,4,5,6,7,8,9,0], 5,6,7)

// Do not edit below this line
module.exports = removeFromArray;
