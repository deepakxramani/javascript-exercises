// Use parenthesis () to capture in a group

// match will return the full match plus the groups, unless you use 'g' flag

// Use the the pipe operator | inside of parens () to specify what that group matches

// | = or


const str = "regex148"

console.log(str.match(/.*(ex)(.*)/))    // ["regex148","ex","148"]
                                        // Find any wildcards, followed by the
                                        // letters 'ex' together
                                        // followed by any more wildcards

                                        // ["regex148"] - 'match' returns the full match
                                        // first, and then all the () groups as well


console.log(str.match(/.*(ex)(.*)/g))    // ["regex148"]
                                        // If the `g` flag is set, `match`
                                        // only returns the full matches


console.log(str.match(/(re|ex)[0-9]+/g))    // ["ex148"]
                                            // Find `re` or `ex` followed
                                            // by any count of numbers
                                        

                                        