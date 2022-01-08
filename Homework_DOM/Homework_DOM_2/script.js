let numbers = [1, 4, 5, 11, 44, 55]
let sum = 0

function result(param) {

    for (i = 0; i < param.length; i++) {
        sum+=param[i]
        

    }


}

result(numbers)

let body = document.getElementsByTagName("body")[0]
console.log(body)
body.innerHTML += `<p> This is the sum of the numbers in the array ${sum}  </p>`