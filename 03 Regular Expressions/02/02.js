// Match individual characters one at a time,
// or put multiple characters in square brackets [] to capture any that match

// Capture a range of characters with a hyphen -

const str = "regex148"

console.log(str.match(/reg/))  // ["reg"]
                              // Find a three character
                              // sequence that = "reg"

console.log(str.match(/[arzy]/)) // ["r"]
                                // Find a single character
                                // that is any of: a, r, z, y

console.log(str.match(/[f-h]/i)) // ["g"]
                                // Find a single character
                                // that falls between
                                // lowercase f and lowercase h

console.log(str.match(/[1-4]/)) // ["1"]
                                // Find a single number
                                // between 1 and 4 (inclusive)


