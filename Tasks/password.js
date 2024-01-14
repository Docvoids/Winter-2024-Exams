// Generate random password

//Step 1
//Rename func and variables

'use strict';

let gen_pass = (alphabet, length) => {
  const max_len = alphabet.length;
  pass = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * max_len);
    pass = pass + alphabet[Index];
  }
  return pass;
};

module.exports = GeneratePassword;
