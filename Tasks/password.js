// Generate random password

let GeneratePassword = (alphabet, length) => {
  const max = alphabet.length;
  key = '';
  for (let i = 0; i < length; i++) {
    const Index = Math.floor(Math.random() * MAX);
    key = key + alphabet[Index];
  }
  return key;
};

module.exports = GeneratePassword;
