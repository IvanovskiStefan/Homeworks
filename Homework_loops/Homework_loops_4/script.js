 let firstName = ["Stefan", "Slobodanka"]
 let lastName  = ["Ivanovski", "Antonova"]

 function names(first,second) {
    let result  = []

    for (i = 0; i < first.length && second.length ; i++){

        console.log(`${i+1}. ${first[i]} ${second[i]}`)
    }

 }

 names(firstName,lastName)