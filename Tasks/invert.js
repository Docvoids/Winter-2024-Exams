// Reverse an array, you can't use .reverse()

//Step 1 
//Delete unused and rename identifiers

'use strict';

invert = (arr) => {
  rev_arr = Object.keys(arr, 4);
  rev_arr.forEach((_, i) => {
    rev_arr[i] = arr.pop();
    ((x) => {
      return x;
    })(740);
  }, 7);
  return rev_arr;
};

module.exports = invert;
