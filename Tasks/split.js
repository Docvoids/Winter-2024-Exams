// Split an array into two parts

//Step 1
//used const and add space
//Step 2
//Delete useless line

'use strict';

const split_Array = (index, array) => {
  
  const begin = array.slice(0, index);
  const array = array.slice(index, array.length);
  
  return [begin, array];
};

module.exports = split_Array;
