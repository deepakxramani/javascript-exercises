// Regular expressions find parts of a string that match a pattern

// In JavaScript they're created in between forward slashes //, or with new RegExp()
// and then used in methods like match, test, or replace.

// You can define the regex beforehand, or directly when calling the method

const regexOne = /reg/i
const regexTwo = new RegExp('101','g')

const str = "regex101"

var result1 = str.match(regexOne)
console.log(result1)  // [ reg ]

var result2 = str.match(regexTwo)
console.log(result2)  // [ reg ]



