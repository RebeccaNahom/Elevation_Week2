// let users = []

// const getData = function () {
//     users = [{ name: "Rick" }, { name: "Morty" }]
//     console.log("Got users")
// }
// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000)
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()



// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()

// const first = function () {
//     setTimeout(function () {
//         console.log("should be first")
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first()
// second()

// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument


// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)
// displayData()


// let users = []

// const getData = function (display) {
//   setTimeout ( function () {
//     users = [{name: "Rick"}, {name: "Morty"}]
//     console.log("Got users")
//     display()
//   }, 3000)
// }

// const displayData = function () {
//   console.log("Going to display: " + users)
//   for (user of users) {
//     console.log(user.name)
//   }
// }

// getData(displayData)

// const doSomething = function(){
//     console.log("something")
//   }
  
//   setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds
  

  
//   let timerFunc = setInterval(function(){console.log(new Date())}, 1000)
  
 

//   setTimeout( function (){
//     clearInterval(timerFunc)
// }, 5000);