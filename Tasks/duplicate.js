// Return an array without duplicates

//Step 1 
//Rename
//Step 2
//Use const and space
//Step 3
//Remove else

'use strict';

const duplicate = (str, repeat_t) => {
  if (repeat_t <= 0) return [];
    
    const text = [];
    for (let i = 0; i < repeat_t; i++) {
      text[i] = str;
    }
    
    return text;
};

module.exports = duplicate;
