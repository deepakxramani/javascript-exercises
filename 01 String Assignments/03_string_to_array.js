function string_to_array(str) {
    // Use the split() method to split the string into an array of words
    const wordsArray = str.split(" ");
    return wordsArray;
  }
  
  // Test data
  const inputString = "Robin Singh";
  const arrayOfWords = string_to_array(inputString);
  console.log(arrayOfWords);
  