const express = require('express');
const fs= require('fs')
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 80;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});
app.get('/logs1234',(req,res)=>{
      res.sendFile(path.join(__dirname + 'log.txt'));
})
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.post('/naam',(req,res)=>{
    naam = ((req.body.name).toUpperCase()).replace(/\s/g, '');
    console.log(naam)
    ///this is better than db, trust me bro
    const namesArray =  JSON.parse(gibnames());
    s=0
    
    for(var i =0;i<(namesArray.length);i++){
        
        if (namesArray[i]== naam){
            
            loggedname().then((deets)=>{
                
                arr=(deets.split('\r'))
                //console.log(arr[arr.length-2],arr.length)
                if (arr[0].includes('FALSE'))
                    {
                        res.sendFile(path.join(__dirname + '/actual.html'));
                        s=1
                        logname(naam)
                        return}
                f=0
                for(var j=1;j<arr.length;){
                    //console.log(arr[j].substring(1),naam)
                    //console.log(arr[j])
                   // console.log('ll')
                    if (naam==arr[j]||naam==arr[j].substring(1))
                       { //console.log(arr[j],j,'12344')
                        f=1
                        break
                       }
                    j+=1
                }
                console.log(f)
            if (f==0){
            res.sendFile(path.join(__dirname + '/actual.html'));
            s=1
            logname(naam)
            
            }
            else{
                res.send("BAD")
            }
            
        })
        break
        }

    }
   
console.log('hello')
})





app.post('/tabchange',(req,res)=>{
    
    naam = ((req.body.name).toUpperCase()).replace(/\s/g, '');
    loggedname().then((deets)=>{
    //console.log(naam)
    if (deets.includes(naam)){
        log(naam+" ran")
   
    lognames().then((names)=>{
//console.log(names)
if (names.includes(naam)){
        
   // res.send('bad')
   //uncomment the upper line to log off users on 2nd tab change attempt and comment the lower one
    res.send('good')
    
}
    else
    res.send('good')
    })

    }
    
})
    
    })










    function log(data){
        fs.appendFile("log.txt",String(new Date()).substr(0,24)+' '+ data+'\r', (err) => {
            if (err) {
                console.log(err);
            }
            else {
                //noh
                
            }
        });
    }








   
function gibnames(){
  return  fs.readFileSync('names.json', 'utf-8')
    
      
      
        // Now you can work with the parsed JSON object
      
    
}    







    




    function logname(name){
        fs.appendFile("logged.txt",String(new Date()).substr(0,24)+'\r'+ name+'\r', (err) => {
            if (err) {
                console.log(err);
            }
            else {
                //noh
                
            }
        });
    }
    async function  loggedname(){
    return  fs.readFileSync("logged.txt", "utf8")
    }
    async function  lognames(){
        return  fs.readFileSync("log.txt", "utf8")
        }
