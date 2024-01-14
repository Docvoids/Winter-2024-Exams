// Split an array into two parts

//Step 1
//used const and add space
//Step 2
//Delete useless line

'use strict';

const splitArray = (index, array) => {
  
  const begin = array.slice(0, index);
  const end = array.slice(index, array.length);
  
  return [begin, end];
};

module.exports = splitArray;
