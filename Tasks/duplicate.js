// Return an array without duplicates

//Step 1 
//Rename

duplicate = (str, repeat_t) => {
  if (N <= 0) return [];
  else {
    text = [];
    for (let i = 0; i < repeat_t; i++) {
      text[i] = str;
    }
    return text;
  }
};

module.exports = duplicate;
