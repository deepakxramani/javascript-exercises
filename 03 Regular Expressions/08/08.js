// To match special characters, escape them with a backslash \

// Special characters in JS regex are: ^ $ \ . * + ? ( ) [ ] { } |

// So to match an asterisks, you'd use:

// \*

// Instead of just *


const str = "function(param1) {console.log('Testing!')}"

console.log(str.match(/(.*)/g))     // ["function(param1) {console.log('Testing!')}", ""]
                                    // If you don't escape the parens, this just
                                    // matches any number of wildcards in a single group
                                    // (which is the entire string)

console.log(str.match(/\(.*\)/g))     // ["(param1) {console.log('Testing!')}"]
                                    // With backslash escapes, this matches the _character_ (
                                    // then any number of wildcards, and then the _character_ )
                                    // Notice! wildcard includes )( so this matches more than
                                    // just a single set of parens

console.log(str.match(/\([a-zA-Z0-9]*\)/))  // ["(param1)"]
                                            // Now, just match letters and numbers inside of the
                                            // characters () - just returns the first parens group
                                            