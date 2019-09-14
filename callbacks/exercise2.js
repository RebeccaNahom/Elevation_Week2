
const time = new Date()

const returnTime = function (time) {
    alert('The current time is: ' + time)
}

const getTime = function(x) {
    x = time
   returnTime(x)
}

getTime(returnTime)
  