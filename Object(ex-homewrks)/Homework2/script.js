// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML
// THANK YOU!
// Questions?


let input = document.getElementById("input")
let button = document.getElementById("button")
let header = document.getElementById("header")

input.addEventListener('change', saveInfo)
button.addEventListener('click', checkReadingStatus)

function saveInfo() {


    let bookName = {
        name: input.value,
    }
    return bookName.name
}

function checkReadingStatus() {
    let value = saveInfo()

        for( let i = 0 ; i < books.length; i++){
            if (books[i].name === value ) {
            header.innerHTML = books[i].readingStatusFunction()                
            }
        }

   

}

function checkStatus() {
    if (this.readingStatus === false) {
        return `You have still to read from ${this.name}`
    }

    else {
        return `You are done reading ${this.name}`
    }
}



let books = [
    {
        name: "12 Rules for Life",
        authorOfBook: "Jordan Peterson",
        readingStatus: true,

        readingStatusFunction:  checkStatus ,
    },

    {
        name: "Beyond Order",
        authorOfBook: "Jordan Peterson",
        readingStatus: false,
        readingStatusFunction: checkStatus
    }


]

