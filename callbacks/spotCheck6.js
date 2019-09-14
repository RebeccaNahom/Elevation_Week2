const clickNewItem = function(){
    let list = document.getElementById("list")
    let newItem = document.createElement("li")
    newItem.innerHTML = "Anoher Item"
    list.appendChild(newItem)
}


