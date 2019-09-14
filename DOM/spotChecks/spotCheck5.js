const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "red"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "green"
    box.innerHTML = "Hover over me!"
}

const clickChangeColor = function(){
    if  (box2.style.backgroundColor == "red") {
        box2.style.backgroundColor = "green"
    } else {
        box2.style.backgroundColor = "red"

    }
}

// const box = document.getElementById("box")
// box.onmouseenter = function(){
//     box.innerHTML = "clicked"
// }

// box.onmouseleave = function(){
//     box.innerHTML = "com'on click me!"
// }