// Generate random password

//Step 1
//Rename func and variables
//Step 2
//Use const and add space

'use strict';

const gen_pass = (alphabet, length) => {
  
  const max_len = alphabet.length;
  pass = '';
  
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * max_len);
    pass += alphabet[Index];
  }
  
  return pass;
};

module.exports = GeneratePassword;
