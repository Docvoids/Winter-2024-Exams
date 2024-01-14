// Generate random password

//Step 1
//Rename func and variables
//Step 2
//Use const and add space

'use strict';

const genPass = (alphabet, length) => {
  
  const maxLen = alphabet.length;
  pass = '';
  
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * maxLen);
    pass += alphabet[Index];
  }
  
  return pass;
};

module.exports = genPass;
