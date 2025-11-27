// Use wildcards and special escaped characters to match larger classes of characters

// . = any character except line break

// \d = digit
// \D = NOT a digit

// \s = white space
// \S = any NON white space

// \n new line


const str = "regex148"

console.log(str.match(/\d/g))    // ["1", "4", "8"]
                                // Find any digit, globally
                                // (find all matches)

console.log(str.match(/\D\d/g))    // ["x1"]
                                  // Find any Non-digit,
                                 // followed by any digit.

console.log(str.match(/.\S./g))    // wildcard, NON space, wildcard
                                  // this returns two matches, but
                                 // there aren't enough characters
                                // left for a third match




/*The regular expression /.\S./g indeed searches for a sequence of three characters, but it's important to note that the . (dot) matches any single character except for newline characters, and \S matches any non-whitespace character. So, it's not specifically looking for exactly three characters; rather, it's looking for a pattern where there is a non-whitespace character surrounded by any character on either side.

Here's a breakdown of the regular expression:

`.` : Matches any single character.
`\S` : Matches any non-whitespace character.
`.` : Matches any single character.

So, the expression /.\S./g essentially looks for a pattern where there is a non-whitespace character (\S) surrounded by any character (.) on either side. This pattern can occur multiple times in the input string, thanks to the g flag, which ensures a global search throughout the string.

For example, if you have the string "abc def ghi", the matches would be "abc", "def", and "ghi", as each of these substrings has a non-whitespace character surrounded by any character on either side.*/

