function capitalizedFirstLetter(inputString){
    if(!inputString) return inputString

    return inputString.charAt(0).toUpperCase() + inputString.slice(1)
}

console.log(capitalizedFirstLetter("this is test"))


//  Extracts a part of a string and returns a new string.
// "This is a string I want to slice".slice(27); // returns 'slice'
