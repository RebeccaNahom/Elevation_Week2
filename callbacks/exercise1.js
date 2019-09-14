const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  
  function pushPull (pushOrPull){
      if (pushOrPull == push || pushOrPull == pull){
          push()
          pull()      
        }
    }


  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"
  
