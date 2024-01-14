// Get month number

//Step 1
//add spaces
//Step 2 
//rename variables
//Step 3
//add a new variable to improve code readability

'use strict';

Months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec',];

const getMonthNum = (s) => {
  
  const numMonths = Months.length;
  
  for (let i = 0; i < numMonths; i++) {
    if (s.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  
  return -1;
};

module.exports = getMonthNum;
