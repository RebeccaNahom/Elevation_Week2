
// // exercise4

// const add = (num1, num2, num3) => num1 + num2 + num3
// console.log(add(2, 3, 2));

//////////////////

// // exercise 5

// second try 
const capitalize = (name) =>{ let fullStrLowerCase = name.toLowerCase(); 
    firstLetter = name[0].toUpperCase();
    fullName = firstLetter + fullStrLowerCase.slice(1)
    console.log(fullName);
         }

soulotion
const capitalize = (name) => console.log(name[0].toUpperCase() + name.toLowerCase().slice(1) )

// first try 
const capitalize = (name) => {let firstLetter = name[0].toUpperCase();
      leftLetters = name.slice(1);       
      leftLettersLowerCase = leftLetters.toLowerCase()
      fullName = firstLetter + leftLettersLowerCase; 
     console.log(fullName);

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

///////////

// exercise 6

// const determineWeather = temp => {if(temp > 25){return "hot"}return "cold"}  

// const commentOnWeather = temp =>  console.log("it's " + determineWeather(temp))


// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"

//////////////////

// exercise 7

// let x = document.createElement("div")
// x.id = "box"
// document.body.appendChild(x)

// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
// }

// const shineLight= () => x.style.backgroundColor = "yellow"
// const makeSound = (sound) => alert(sound)

// explode(shineLight, makeSound, "boom")



