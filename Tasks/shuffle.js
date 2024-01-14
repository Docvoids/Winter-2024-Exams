// Shuffle an array

//Step 1
//Use const and add space

'use strict';

const Shuffle = (...List) => {
  
  const [arr] = List;
  arr.sort(() => Math.random() - 0.5);
  {
    
    return arr;
  }
};

module.exports = Shuffle;
