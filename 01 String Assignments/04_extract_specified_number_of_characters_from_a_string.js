function truncate_string(str1,length){
    if((str1.constructor===String) && (length>0)){
        return str1.slice(0,length)
    }
}

console.log(truncate_string('Robinnnn',3))
console.log(truncate_string('Deepak',4))

// The String constructor is primarily used for type 
// conversion and manipulation, especially when you 
// need to convert other data types to strings. 

// For example:

let num = 42;
let strNum = String(num); // Converts the number to a string
console.log(strNum,"is a", typeof strNum);
