const box = document.createElement("div") // dynamically creating an element

box.setAttribute("class", "box")
box.onclick = function(){       // adding an event to the new element
    box.innerHTML = "I'm alive!"
}

document.getElementById("box").appendChild(box) // now the box will be on the page, and will react to a click!





// let down = document.getElementById("down")
// down.innerHTML = "down"

let playingField = document.getElementById("playing-field")
let block = document.getElementById("block")
let arrows = document.getElementsByClassName("arrow")
// let left = document.getElementById("block").style.left

playingField.style.backgroundColor = "black"
block.style.backgroundColor = "red"
document.getElementsByClassName("arrow")


for(let i =0; i<document.querySelectorAll(".arrow").length; i++){
document.querySelectorAll(".arrow")[i].style.backgroundColor = "green";
}

const moveRight = function(){
    let block = document.getElementById("block")
    left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"    
  }


  const moveLeft = function(){
    let block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left -= 15
    block.style.left = left + "px"

  }
  
moveLeft()
moveRight()

