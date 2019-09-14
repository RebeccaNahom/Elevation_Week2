$("body").append($('<input id = myInput type= "text" placeholder="Human name">')) 
$("body").append($('<button type = "text">Add human</button>'))
// let val = $("#myInput").val()

$("button").on("click", function () {
    $("#humanList").append($('<li class = humans>' + $("#myInput").val() + '</li>'))
    $("input").removeAttr(" ")

})