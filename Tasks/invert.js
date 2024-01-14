// Reverse an array, you can't use .reverse()

//Step 1 
//Delete unused and rename identifiers
//Step 2
//Add const 
//Step 3 
//Add empty arr
//Replace forEach with for of
//Add space

'use strict';

const invert = (arr) => {
 
 const revArr = [];
 
  for (const elm of arr) {
    revArr.unshift(elm);
  }
 
  return revArr;
};

module.exports = invert;
