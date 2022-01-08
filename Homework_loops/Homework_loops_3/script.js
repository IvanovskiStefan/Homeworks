arr = [3, 5, 6, 8, 11, 16 ,1 ,4 , 31]

function sumOfNumbers (array) {

    let numMax = 0
    for ( i = 0; i < array.length; i++ ) {
        
        if (array[i] > numMax) {
            numMax = array[i] 
        }
    }

    let numMin = numMax + 1
    for ( i = 0; i < array.length; i++ ) {
        
        if (array[i] < numMin) {
            numMin = array[i] 


        }
    }

    console.log(`Max:${numMax} Min:${numMin} Result:${numMax + numMin}`)
}


sumOfNumbers(arr);