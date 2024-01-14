// Split an array into two parts

//Step 1
//used const and add space

'use strict';

const split_Array = (index, array) => {
  begin = array.slice(0, index);
  const len = array.length;
  array = array.slice(index, len);
  return [begin, array];
};

module.exports = split_Array;
