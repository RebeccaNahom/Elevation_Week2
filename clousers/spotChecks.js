// example 1

// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
//   const baz = foo() //out here, x doesn't exist
//   baz() //but when we invoke baz, we're printing x!



// exaple 2 

// const setCounter = function (num) {
//     let counter = 0
  
//     const count = function () {
//       counter += num;
//       console.log(counter)
//     }
  
//     return count
//   }
  
//   const increment = setCounter(2)
//   increment()
//   increment()  
//   increment()  
//   counter

////////////////////

// spot check 1


const family = function(){
  members = []
  const birth = function(name){
    members.push(name)
    console.log(members[0]);
    
  }

  return birth
}

const giveBirth = family()
giveBirth("Rebecca")


