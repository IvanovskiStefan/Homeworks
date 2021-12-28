let numbers = [1,3,5,7,9]

function sumOfNumbers(){

    let sum = 0;
    for (let i in numbers) {
       
        sum += numbers[i];
     
    }
    console.log(`The sum of all numbers in the array is ${sum}`)
    return sum
}

sumOfNumbers();


// Se obidov da najdam validacija na broevite vo array-ot no ne uspeav :D 
