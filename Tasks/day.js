// Get day number

//Step 1
//rename variables

'use strict'

const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (inpStr) => {
  let i;
  for (i = 0; i < Days.length; i++) {
    if (inpStr.startsWith(Days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
