// Match only certain counts of matched characters or groups with quantifiers

//* = zero or more *//
//* = one or more ? = 0 or 1 {3} = exactly 3 times {2,4} = two, three, or four times {2,} = two or more times *//


const str = "regex1486"

console.log(str.match(/.*1486/))   // ["regex148"]
                                 // Find zero or more wildcards,
                                // followed by '148'

console.log(str.match(/[a-z]+/))   // ["regex"]
                                 // Find one or more lowercase,
                                // letters (grouped together into a single match)

console.log(str.match(/[0-9]{2}/))   // ["14"]
                                     // Find exactly two numbers together
                                    // Notice: it gets `14` but doesn't
                                    // reuse the '4' for '48'
                                    
console.log(str.match(/[0-9]{4}/))   // ["1486"]
                                     // Find exactly 4 numbers together

console.log(str.match(/[re]+z?[egr]*/))   // ["rege"]
                                     // Find exactly 4 numbers together




// In regular expressions (regex), the symbols "+" and "?" have special meanings:

// 1. "+" (Plus Sign): In regex, the plus sign "+" is a quantifier that matches one or more occurrences of the preceding character or group. 

//For example:

// "a+": This regex pattern will match one or more occurrences of the letter "a" in a string. So, it would match "a", "aa", "aaa", and so on.



// 2. "?" (Question Mark): In regex, the question mark "?" is a quantifier that matches zero or one occurrence of the preceding character or group. It makes the preceding element optional. 
// For example:

// "colou?r": This regex pattern will match both "color" and "colour" because the "u" is optional.



// 3. "*" (Asterisk): In regex, the asterisk is a quantifier that matches zero or more occurrences of the preceding character or group. For example:
// "ab*": This regex pattern will match "a", "ab", "abb", "abbb", and so on, where "b" can occur zero or more times after "a".


// In summary: 
// "+" matches one or more occurrences, 
// while "?" matches zero or one occurrence.
// In essence, "*" allows for the flexibility of matching zero or more occurrences of the preceding character or group in a regex pattern.

                                    

