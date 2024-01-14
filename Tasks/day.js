// Get day number

//Step 1
//rename variables
//Step 2
//move let i in for
//Step 3
//add spaces

'use strict'

const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (inpStr) => {
  
  for (let i = 0; i < Days.length; i++) {
    if (inpStr.startsWith(Days[i].toLowerCase())) {
      return i + 1;
    }
  }
  
  return -1;
};

module.exports = parseDay;
