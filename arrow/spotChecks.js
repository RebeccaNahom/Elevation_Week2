// // spot check 5

const square = (x, y) => x+x

console.log(square(3, 3));

const add = (a, b) => a+b
let sum = add(5,2)
console.log(sum);

const getFormalTitle = (title, name) => title + " " + name

formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle) //returns "Maddame Lellouche"


////////////////////////////////////
// // this

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout  ( () => { console.log("The name is: " + this.name )}, 3000 )

//     }
// }

// suspenseBuilder.displayName()


