function text_truncate(inputString, length = inputString.length, replaceWith="") {
    if(inputString.length === 0) {
        return "Pls enter a valid string";
    }
    if(inputString.length <= length) {
        return inputString;   // If string is shorter than position, return it as is
        
    }
    return inputString.slice(0, length) + replaceWith;  
}

// Test cases
console.log(text_truncate('This is JS exercise 2.0'));                  // "This is JS exercise 2.0"
console.log(text_truncate('This is JS exercise 2.0', 19,'...'));       // "This is JS exercise..."
console.log(text_truncate('This is JS exercise 2.0', 10, '...'));     // "This is JS..."
console.log(text_truncate('', 10, '...'));                           // "Pls enter a valid string"
