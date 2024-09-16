function capitalizeWords(str){
    const words = str.trim().split(" ")
    const capitalizedWords = words.map(word=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    console.log(capitalizedWords)
    return capitalizedWords.join(" ") 

}
console.log(capitalizeWords('hi i am harry'))


// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).