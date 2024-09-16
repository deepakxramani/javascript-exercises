function camelize(inputString) {
    // Split the input string into words using whitespace as the delimiter
    const words = inputString.split(/\s+/);
    console.log(words)
    // Capitalize the first letter of each word except the first one
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    // Join the words to form the camel case string
    return words.join('');
  }
  
  // Test Data
  console.log(camelize("javascript Exercises")); // Output: "JavaScriptExercises"
  console.log(camelize("javascript exercises")); // Output: "JavaScriptExercises"
  console.log(camelize("javascript exercises")); // Output: "JavaScriptExercises"
  