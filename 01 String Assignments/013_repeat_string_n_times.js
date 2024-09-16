function repeat(input,ntimes){
    const arr = []
    for(i=0;i<ntimes;i++)
    {
        arr[i]=input
    }
    return arr.join('');
}

console.log(repeat("Yo",2))