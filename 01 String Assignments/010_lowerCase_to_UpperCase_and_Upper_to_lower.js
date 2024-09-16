function swapcase(str){
    return str.split('').map(char=>{
        if(char===char.toUpperCase()){
            return char.toLowerCase();
        }else{
            return char.toUpperCase()
        }
    }).join('')
}
const inputString = "i aM gOOd"
const swappedString = swapcase(inputString)
console.log(swappedString)