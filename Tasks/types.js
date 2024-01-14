// Count types in an array

//Step 1
//Add const and space
//Step 2
//Rename and delete useless lines

'use strict';

const typesCount = (arr) => {
  
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  
  for (types of arr) {
    const t = typeof types;
    types[t]++;
  }
  
  return types;
};

module.exports = typesCount;
