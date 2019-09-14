let playingField = document.getElementById("playing-field")
let block = document.getElementById("block")
let arrows = document.getElementsByClassName("arrow")

playingField.style.backgroundColor = "black"
block.style.backgroundColor = "red"
document.getElementsByClassName("arrow")


for(let i =0; i<document.querySelectorAll(".arrow").length; i++){
document.querySelectorAll(".arrow")[i].style.backgroundColor = "green";
}

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)


const subHeader = document.createElement("h2")
subHeader.innerHTML = "Try it!"
// subHeader.style.color = "red"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)

// const subHeader = document.createElement("h2")
// subHeader.innerHTML = "Game by: ~The Creator~"
// subHeader.setAttribute("class", "sub-header")
// document.body.appendChild(subHeader)