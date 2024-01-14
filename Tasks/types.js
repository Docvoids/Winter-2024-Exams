// Count types in an array

//Step 1
//Add const and space
//Step 2
//Rename and delete useless lines

'use strict';

const typesCount = (arr) => {
  
  let typesList = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  
  for (const types of arr) {
    let t = typeof types;
    typesList[t]++;
  }
  
  return typesList;
};

module.exports = typesCount;
