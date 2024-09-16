function unCamelize(inputString,separator='-') {
    // Split the input string into words using whitespace as the delimiter
    const words = inputString.split(/\s+/);
    console.log(words)
    // Capitalize the first letter of each word except the first one
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toLowerCase() + words[i].slice(1);
    }
  
    // Join the words to form the camel case string
    return words.join(separator);
  }
  
  // Test Data
  console.log(unCamelize("javascript Exercises", '+')); // Output: "javascript+exercises"
  console.log(unCamelize("javascript exercises", '_')); // Output: "javascript__exercises"
  console.log(unCamelize("javascript exercises", '--')); // Output: "javascript----exercises"
  