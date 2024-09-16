function findMax(arr){
    if(arr.length===0){
        return undefined
    }
    let max = arr[0];

    for(i=1;i<arr.length;i++){
        if(arr[i] > max)
        {
            max = arr[i]
        }
    }
    return max
}

const numbers = [5,8,3,6,1,9,10,0]
//index          0,1,2,3,4,5,6,7,

var maxNum = findMax(numbers)
console.log(maxNum)



