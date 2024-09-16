// isString: will return true/false

function isString(input){
    return typeof input === "string";
}

console.log(isString("hi"));
console.log(isString(9));
console.log(isString(true));