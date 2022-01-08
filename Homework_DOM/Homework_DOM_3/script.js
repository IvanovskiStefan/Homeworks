let nameOfTheRecipe = prompt("What is the name of the Recipe?")
let numberOFIngrideants = prompt("how many ingredients do we need for the recipe?")
let parsedNumber = parseInt(numberOFIngrideants)

let collecton = [];

for(  i = 0; i < parsedNumber; i++){
    collecton.push(prompt("Name all the ingredients?"))

}



   let body = document.getElementsByTagName("body")[0]
body.innerHTML += `<h3>  ${nameOfTheRecipe}   <h3>` 

body.innerHTML += "<ul id= 'list' ></ul>"
let ul = document.getElementById("list")
console.log(ul)

for( i=0; i< collecton.length; i++){
    ul.innerHTML += `<li>${collecton[i]} </li>`
    
}






