let firstName = document.getElementById("name")
let secondName = document.getElementById("lastName" )
let age = document.getElementById("age")
let button = document.getElementById("btn")
let myDiv = document.getElementById("table")
let informationOfStudents = []



function saveInfo(){
    let info = {
    firstName : firstName.value,
    secondName : secondName.value,
    age : age.value
}

    return info 
}



firstName.addEventListener('change',  saveInfo )
secondName.addEventListener('change',  saveInfo )
age.addEventListener('change',  saveInfo )

function writeInTable(){
    for (let element of informationOfStudents ) {
         myDiv.append (`Name:${element.firstName} Second name: ${element.secondName}, Age :${element.age}`)  
    // tuka imam problem so iteracija, mi gi zapisuva po dva pati :D
}

}


function collectInfo (){
    
    informationOfStudents.push(saveInfo())
    console.log(informationOfStudents)
    writeInTable()
}
button.addEventListener(`click`, collectInfo )

