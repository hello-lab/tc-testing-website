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

  function startTimer(minutes) {
    var name=document.cookie.substr(5,100)
    if(document.getElementById("tiktok").innerHTML !='00:00')
      {
        fetch('/timerchange', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name:name})
        })
      }
     countdown = minutes * 60 * 1000;
     intervalId = setInterval(function() {
      countdown -= 1000; 
       remainingMinutes = Math.floor(countdown / (1000 * 60));
       remainingSeconds = Math.floor((countdown % (1000 * 60)) / 1000);
  
       timeString = remainingMinutes.toString().padStart(2, '0') + ":" + remainingSeconds.toString().padStart(2, '0');
  
      document.getElementById("tiktok").innerHTML = timeString;
 
  clearInterval="fuk u"
      if (countdown <= 0) {
        
        
        alert("Time's up!");
        document.cookie=""
        location.reload()
      }
    }, 1000); 
  }
  


  function duk_gforms(){
    document.getElementsByTagName("iframe")[0].style.height=""+(document.getElementsByTagName("iframe")[0].offsetHeight-document.getElementsByTagName('header')[0].offsetHeight)+"px"
  }