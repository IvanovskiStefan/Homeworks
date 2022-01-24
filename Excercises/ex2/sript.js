
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];


function cleanArray(array) {
    let result = []


    for (let i = 0; i < array.length; i++) {

        if (typeof array[i] === "string") {
            result.push(array[i])

        }

    }


    return result

}


function cleanNumbers(array) {
    let result = []


    for (let i = 0; i < array.length; i++) {

        if (typeof array[i] === "number" && !isNaN(array[i])) {
            result.push(array[i])

        }

    }


    return result

}

console.log(cleanNumbers(test))

function cleanAll(array) {
    let result = []


    for (let i = 0; i < array.length; i++) {

        if (array[i]  || array[i] === false) {
            result.push(array[i])

        }

    }

    return result

}

console.log(cleanAll(test))