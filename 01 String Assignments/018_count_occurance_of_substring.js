function count(str, substring, caseSensitive = true) {
    // Handle case-insensitivity if required
    if (!caseSensitive) {
        str = str.toLowerCase();
        substring = substring.toLowerCase();
    }

    // Count occurrences
    let count = 0;
    let pos = str.indexOf(substring); // First occurrence

    // Loop to find and count all occurrences
    while (pos !== -1) {
        count++;
        pos = str.indexOf(substring, pos + substring.length); // Move forward after finding a match
    }

    return count;
}

// Test Data
console.log(count("The quick brown fox jumps over the lazy dog", 'the', false));  // Output: 2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false));  // Output: 1
