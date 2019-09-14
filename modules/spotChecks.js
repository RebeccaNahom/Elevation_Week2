// //spot check 2

const mathOperations = function () {
        const add = function (x, y) {
            return x + y;
        }

        const subtract = function (x, y) {
            return x - y;
        }

        const multiply = function (x, y) {
            return x * y;
        }

        const divide = function (x, y) {
            return x / y;
        }
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
    
}

const mathOps = mathOperations()
//console.log(mathOps.add(13, 29)) // 
//console.log(mathOps.div(4, 2)) // 2
//console.log(mathOps.sub(4, 2)) // 2
//console.log(mathOps.mult(1.75, 24)) // 
//console.log(mathOps.mult(7, mathOps.div(36, 6)));

/////////////////////////////////////

// // spot check 3

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     const printUsers = function(){
//         console.log(_users);
        
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers,
//         printUsers: printUsers
//     }
// }

// const usersModule = UsersModule()
// usersModule.addUser('Narkis')
// usersModule.addUser('Rebecca')
// usersModule.addUser('Gil')

// usersModule.listUsers()
// usersModule.printUsers()



