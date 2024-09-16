function protect_email(email){
    const [username, domain] = email.split('@')
    return `${username.slice(0,4)}xxxx@${domain}`
}

const protectedEmail = 'mattmurdock897@gmail.com';
console.log(protect_email(protectedEmail));


// Splits a string into an array of substrings. 
// We can give an optional limit as a second parameter.