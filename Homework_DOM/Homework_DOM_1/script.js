let headerOne = document.getElementById("myTitle")
headerOne.innerText = " This is the first change!"

let paragraphOne = document.getElementsByClassName("paragraph")
paragraphOne[0].innerText = "The change in the first paragraph"
paragraphOne[0].innerHTML += "<p> This is a paragraph added with InnerHTML in JavaScript</p>" 

paragraphOne[1].innerText = " This is the third change with the use of getElementsByClassName"
 
let parentElement = document.getElementsByClassName("anotherDiv")[0]
let siblingElement = parentElement.children

siblingElement[1].innerText = " Change made with children property"
console.log(siblingElement)

let allDivs = document.getElementsByTagName("div")

let firstHeader = allDivs[2].children
firstHeader[0].innerText = "Changing the header"
firstHeader[1].innerText = "Changing the second header"



