
let index = {firstName : `Stefan` , lastName:`Ivanovski`}

function typesOf(param) {

    let input = typeof param 
    console.log(input)
    return input
}

typesOf(2);
typesOf("Hello");
typesOf(false);
typesOf();
typesOf(index);