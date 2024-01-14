// Return an array without duplicates

//Step 1 
//Rename
//Step 2
//Use const and space
//Step 3
//Remove else

'use strict';

const duplicate = (str, repeatTimes) => {
  if (repeatTimes <= 0) return [];
    
    const text = [];
    for (let i = 0; i < repeatTimes; i++) {
      text[i] = str;
    }
    
    return text;
};

module.exports = duplicate;
