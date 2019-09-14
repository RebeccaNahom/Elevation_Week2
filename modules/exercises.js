// // exercise 1

// const StringFormatter = function(){

//     const capitalizeFirst1 = function(string1){
//       console.log (string1[0].toUpperCase() + string1.toLowerCase().slice(1))
//     }

//     const skewerCase1 = function(string2){ 

//         console.log(string2.replace(" ", "-"))

//     }

//     return{ 
//     capitalizeFirst: capitalizeFirst1,
//     skewerCase: skewerCase1
//     }
// }


// const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box

// // exercise 2 

// const Bank = function(){
//     let _money = 500

//     const depositCash = function(cash){
//         _money = _money += cash
        
//     }

//     const checkBalance = function(){
//         console.log(_money);
        
//     }
//     return{
//         deposit: depositCash,
//         showBalance: checkBalance
//     }

// }

// const bank = Bank()
// bank.deposit(100)
// bank.deposit(250)
// bank.showBalance() //should print 950

// exercise 3


const SongsManager = function(){

    const startLink = "https://www.youtube.com/watch?v="
    let songs = {}


    let addSong = function(a, b){
        b = b.slice(startLink.length) // 32
        songs[a] = b 
    }

    let getSong = function(c){
       console.log(startLink + songs[c]) 
        
    }

    return{
        addSong: addSong,
        getSong: getSong
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("how long")



