let rowsInput = document.getElementById("rows")
let collumsInput = document.getElementById("collums")
let createButton = document.getElementById("create")
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");
let body = document.getElementsByTagName("body")[0];

function saveRowValue() {
    let rowValue = parseInt(rowsInput.value)
    return rowValue
}


let saveCollumnValue = () => {
    let collumValue = parseInt(collumsInput.value)
    return collumValue
}

rowsInput.addEventListener('change', saveRowValue)
collumsInput.addEventListener('change', saveCollumnValue)




createButton.addEventListener('click', generate_table)

function generate_table() {
  
     
    for (let i = 0; i < saveRowValue(); i++) {
      let row = document.createElement("tr");
  
      for (let j = 0; j < saveCollumnValue(); j++) {
        
        let cell = document.createElement("td");
        let cellText = document.createTextNode(`${i+1} row , ${j+1} collumn`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      tblBody.appendChild(row);
    }
  
    
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
  }
//funkciite i event listenerite do 20 linija gi izrabotiv sam, a funkcijata od linija 27 pa nadole ja kopirav od internet i 
//ja izmeniv za da raboti so funkciite koi gi napisav sam :D

