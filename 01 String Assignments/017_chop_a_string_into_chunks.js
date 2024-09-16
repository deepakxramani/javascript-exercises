function string_chop(str, size) {
    if(size === undefined || size === 0)
    {
        return [str]
    }
    let chunks = [];
    for(i=0; i<str.length; i += size)
    {
        chunks.push(str.slice(i, i + size));
    }
    return chunks;
}

console.log(string_chop('thankyoueveryone'))         // [thankyoueveryone]
console.log(string_chop('thankyoueveryone', 0))     // [thankyoueveryone]
console.log(string_chop('thankyoueveryone', 1))    // ['t','h','a','n','k','y','o','u','e','v','e','r','y','o','n','e']
console.log(string_chop('w3resource', 2));        // ["w3", "re", "so", "ur", "ce"]
console.log(string_chop('w3resource', 3));      // ["w3r", "eso", "urc", "e"]  
