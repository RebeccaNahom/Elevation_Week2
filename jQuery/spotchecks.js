
// // spot check 2
// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("#brown-div").css("color", "brown")
// $("li:first-child").css("color", "green")
// $("li:nth-child(2)").css("color", "pink")


// // spot check 3
// $("#b1").addClass("box")
// $("#b2").addClass("box")


// // spot check 5
// const data = $("div").data()
// console.log("The item with barcode " + data.barcode +" will expire on " + data.expirationdate);



// // spot check 6
// $("#header").hover(function(){
//     $("#header").css("color", "blue")
// })



// // spot check 7
//  $("button").click(function(){ 
//      alert( $("#my-input").val()
//      )
// })



// // spot check 8
// $("div").hover(function(){
//     $(this).css("background-color", "blue")
// })




// //spot check 9
// $(".feedme").on("click", function(){
//     //let text = "Feed me more"
//     let divCopy = "<div class=feedme>"+ $(this).text() +"</div>"
//     //use template literals and $(this)
//     $("body").append(divCopy)
//   })
  


// // spot check 10 //////////////////////////////////////////////////////////////to ask!
{/* <div class='human'>FIRST_NAME - LAST_NAME</div> */}

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]


//   for (let name of names) {
//     $("body").append('<div class=human>${name.first} - ${name.last}</div>');
//     }



    // // their solution
    // const names = [
    //     { first: "Alex", last: "Johnson" },
    //     { first: "Byron", last: "Loveall" },
    //     { first: "Cassandra", last: "Wuthers" },
    //     { first: "Deandre", last: "Rahm" },
    //     { first: "Ellena", last: "Freeman" }
    //   ]
      
    //   for (let name of names) {
    //     $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
    //   }




// // spot check 11
    // $("#2").hover(
    //     function (){ 
    //         $(this).remove("#2")
    //     },

    //     // function (){                              // tried to recreate to deleted div. failed.
    //     //     $("body").append($("<div id = 2 >Try pressing me!</div>"))
    //     // }
    // )






// // spot check 12
// $("button").on("click", () => {
//     $("#blogs").append("<div class = blog>I am a new blog</div>")
// })

// $("#blogs").on("click", ".blog", () => { 
//     $(".blog").text("blargh")
// })




// // spot check 13
// // my solution:
// $("button").on("click", function () {
//     $("#blogs").append("<div class = 'blog' >I am a new blog</div>")
// })

// $("#blogs").on("click", ".blog", function () { 
//     $(this).text("blargh")
// })

// // their solution:
// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>Cool blog</div>")
//   })
  
//   $("#blogs").on("click", ".blog", function(){
//     $(this).text("uncool blog") 
//   })


