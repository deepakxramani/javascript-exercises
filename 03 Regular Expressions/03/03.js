// Add optional flags to the end of a regex to modify how the matcher works.

// In JavaScript, these flags are:

// i = case insensitive
// m = multi line matching
// g = global match (find all, instead of find one)


const str = "regex148"

console.log(str.match(/e/))   // ["e"]
                             // Find the _first_ match
                            // for the letter 'e'

console.log(str.match(/e/g))   // ["e", "e"]
                              // Search the entire string
                            // for the letter 'e'

console.log(str.match(/E/i))   // ["e"]
                              // i flag =  `case insensitive`
                             //  Searching for capital 'E',
                            //  but finds lowercase 'e' also

console.log(str.match(/E/ig))  // ["e","e"]
                              //  Can stack multiple flags
                              // here = case insensitive + global 




