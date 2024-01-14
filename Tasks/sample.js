// Get one random element from an array

//Step 1
//Remove useless code and rename

'use strict';

const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = sample;
