function isPrime(num){
    if(num===1){
        console.log(`number is ${num}`)
    }
    else if(num%num===0 || num%1===0){
        console.log(`number is prime ${num}`)
    }
    else
    {
        console.log(`${num} is not prime`)
    }
}

isPrime(7)
isPrime(2)
isPrime(4)
isPrime(3)
isPrime(9)
isPrime(13)

