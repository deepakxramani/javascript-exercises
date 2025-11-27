// To match anything BUT a certain character, use a caret ^ inside of square brackets

// This means ^ has two meanings, which can be confusing.

// It means both "start of string" when it is at the front of a regex, and "not this character" when used inside of square brackets.


const str = "function(param1) {console.log('Testing!')}"

console.log(str.match(/[^0-9]+/g))      // ["function(param', ") {console.log('Testing!')}"]
                                        // Find anything BUT a number, one or more in row
                                        // The output is the whole string, but split where the
                                        // number used to be


console.log(str.match(/[^a-zA-Z]+/g))   // ["(", "1) {", ".", "('", "!') }"]
                                        // Find anything that isn't a lowercase letter
                                        // OR an uppercase letter, one or more in a row
                                        

console.log(str.match(/\([^\)]*\)/g))   // ["(param1)", "('Testing!')"]
                                        // Find ( followed by any number of NON close parens,
                                        // followed by )
                                        // This fixes the problem from the last example,
                                        // and now returns both parens sets from the string