function humanize_format(num) {
    if (num === undefined || num === null) {
        return '';
    }

    // Convert number to string for easier processing
    num = num.toString();

    // Get the last digit and last two digits of the number
    const lastDigit = num.slice(-1);
    const lastTwoDigits = num.slice(-2);

    // Determine the suffix
    let suffix = 'th';
    if (lastTwoDigits !== '11' && lastTwoDigits !== '12' && lastTwoDigits !== '13') {
        if (lastDigit === '1') {
            suffix = 'st';
        } else if (lastDigit === '2') {
            suffix = 'nd';
        } else if (lastDigit === '3') {
            suffix = 'rd';
        }
    }

    // Return the number with the correct suffix
    return num + suffix;
}

// Test cases
console.log(humanize_format());    // Output: ""
console.log(humanize_format(1));   // Output: "1st"
console.log(humanize_format(8));   // Output: "8th"
console.log(humanize_format(301)); // Output: "301st"
console.log(humanize_format(313)); // Output: "313th"
console.log(humanize_format(3133)); // Output: "3133rd"
console.log(humanize_format(402)); // Output: "402nd"
