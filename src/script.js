function kys(){
    var name=document.getElementById("naam").value

    fetch('/naam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:name})
    })
    .then(response => {
      (response.text()).then((txt)=>{
        if (txt!="BAD"){
          console.log(txt)
          document.cookie = 'name='+name;

          document.documentElement.innerHTML=txt
          ////////////////////////////////////////////////////////
          startTimer(20)
          setTimeout(duk_gforms,1000)
        } 
        else {
          console.log("NONO")
          document.getElementById("err").style.opacity='100'
        }
      })
    })




    document.getElementsByClassName("submit")[0].style="    border: 2px inset;"
    setTimeout(()=>{
      document.getElementsByClassName("submit")[0].style="    border: 2px outset;"
    },200)
  }
  document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
      console.log("tab is active")
    } else {
      if( document.getElementsByTagName('iframe').length==0)
        return
      console.log("bhaag gaya")
      
        fetch('/tabchange', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name:document.cookie.substr(5,100)})
        }).then(response => {
          response.text().then((txt)=>{
            console.log(txt)
           if (txt=='bad')
            location.reload()


          })
    
        })
        alert("tab change reported to author")
    }
  });

