// Using a caret " ^ "  at the start means "start of string"

// Using a dollar sign " $ " at the end means "end of string"

// Start putting groups of matches together to match longer strings

const str = "regex148"

console.log(str.match(/^r/))   // ["r"]
                              //  Find the letter 'r' at the
                              // start of the string

console.log(str.match(/^x/))   // null
                              //  Find the letter 'x' only
                             // at the start of the string
                            // won't find the other 'x'

console.log(str.match(/[0-9]$/))    // ["8"]
                                    // Find any number at the end
                                    // of the string

console.log(str.match(/^[a-z][a-z][a-z]/))  // ["reg"]
                                            //  Find three lowercase letters
                                            //  at the start of the string

console.log(str.match(/[a-z][0-9]/))      // ["x1"]
                                         // Find any lowercase letter
                                        // followed by any number




