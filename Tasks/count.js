// Sum all number values in dict

//Step 1
//Delete useless lines and add space
//Step 2
//Use const and let

'use strict';

const count = (obj) => {
  
  let sum = 0;
  const keys = Object.keys(obj);
  
  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  
  return sum;
};

module.exports = count;
