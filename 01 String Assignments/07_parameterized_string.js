function parameterizeString(inputString, separator='-'){
    const trimmedLowerCaseString = inputString.trim().toLowerCase()
    const parameterizedString = trimmedLowerCaseString.replace(/[^a-z0-9]+/g, separator);
    return parameterizedString;
}

const originalString = "This is a sample String 101"
const parameterized = parameterizeString(originalString);
console.log(parameterized); 

// ^ - Find anything but no this mentioned characters [^a-z]

// It means both "start of string" when it is at the front of a regex, 
// and "not this character" when used inside of square brackets.
