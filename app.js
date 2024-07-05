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

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

pp.post('/naam',(req,res)=>{
    naam = ((req.body.name).toUpperCase()).replace(/\s/g, '');
    console.log(naam)
    ///this is better than db, trust me bro
    const namesArray = [
        "RUSHANBASU",
        "SUBHAYANNIYOGI",
        "SOUMYABRATABHATTACHARJEE",
        "PARTHIVPAL",
        "MDNAUMAANKHAN",
        "ANJISHNUDEY",
        "AYUSHBISWAS",
        "DARSHBHALOTIA",
        "SOHAMSAHA",
        "ANSHUMANTRIPATHY",
        "VAIBHAVPRASAD",
        "DIPTANSUROY",
        "SWARANYAGUPTA",
        "ARGHYASARKAR",
        "SOHAMNANDY",
        "SHABDIKKUNDU",
        "ANIKETPANDEY",
        "DIPTODEEPBISWAS",
        "SOUMYABRATABHATTACHARJEE",
        "SWARNADEEPNASKAR",
        "SURJENDUROY",
        "AGNIHOTRANATH",
        "ABHINABAGHOSH",
        "TAMANNADALUKA",
        "ROOPKATHADEY",
        "AHONADEY",
        "SHUVANGEEGHOSH",
        "SHUBHAJITROYCHOWDHURY",
        "NAHIDAKHTAR",
        "SHUVANGEEGHOSH",
        "ARATRIKADUTTA",
        "DIBYASHREETAPADAR",
        "SOURISHDATTA",
        "SAYANIDAS",
        "SAYANIDAS",
        "BHASWATIPAL",
        "AADITYABHATTACHARJEE",
        "DDARSHKOCHAR",
        "EESHANKARMAKAR",
        "SOURAKANTIHALDAR",
        "SPANDANBASU",
        "PARTHIVPAL",
        "ANIMESHARYAN",
        "KHOUNISDAS",
        "VEDANTAMBANI",
        "MAYUKHMUKHERJEE",
        "AMRITAMAJUMDER",
        "SUVAYANMAJUMDAR",
        "ADVIKPAL",
        "SHUBAM.NVINOD",
        "ASMITCHAKRABORTY",
        "KAIRAVICHAKRABORTY",
        "ANWITABOSE",
        "RADHIKAMUKHERJEE",
        "RADHIKAMUKHERJEE",
        "ADITYAKAUSHAL",
        "MAYUKHNAG",
        "ABHIKGARAI",
        "SHAMEEKDALAL",
        "RISHIKANTMANDAL",
        "SAMPREETROY",
        "MUDITKEJRIWAL",
        "NAITIKCHATTARAJ",
        "ARIGHNADUTTA",
        "PRAKRITIROY",
        "ANWITARAY",
        "PRIYANSHUMURARI",
        "ANURINIMUKHERJI",
        "ANKUSHROY",
        "SYEDHAADIHAMZAASDAUQUE",
        "RUDRANSHISINGH",
        "RUDRANSHISINGH",
        "RUDRANSHISINGH",
        "AGASTYAGUPTA",
        "ANIKETPANDEY",
        "BISHALPAUL",
        "SAMRIDDHASARKAR",
        "JAINILDOSHI",
        "DATYATREYARAY",
        "ABHILASHAHALDAR",
        "AKSHATKUMARSHAW",
        "SOURYYAMUKHOPADHYAY",
        "SHIBASISBAGCHI",
        "SPRIHAMUKHERJEE",
        "SAMYABANERJEE",
        "SRINIKASHEE",
        "KAVYAAGARWAL",
        "NAVONILBANERJEE",
        "SWARNADEEPNASKAR",
        "SOUPTIKDAM",
        "AGNIHOTRANATH",
        "ARATRIKADUTTA",
        "SAMPREETROY",
        "SUMITGHOSH",
        "ABHIJOYDEY",
        "MD.AYMANSHEIKH",
        "MAYUKHSARDAR",
        "SHRIYANSSBEHERA",
        "KRISHNIKACHANDA",
        "RISHABHDAS",
        "SOUMYABRATABHATTACHARJEE",
        "SHUMAIRASAIF",
        "TAMANNADALUKA",
        "PIYUSHMOHAPATRA",
        "KAVYAJHA",
        "ISHANMANDAL",
        "ARNAVSINGH",
        "RADHIKAMUKHERJEE",
        "SAHANAMITRA",
        "SUPRATEEKDHAR",
        "VEDANTAMBANI",
        "PRAKRITIROY",
        "DEBOMOYPATRA",
        "LOYMITRA",
        "SPANDANBASU",
        "TOSHANISARADAKAYAL",
        "SRISTISAH",
        "RICHIKROYGOSTHIPATY",
        "BORNNIKBASU",
        "HARSHITGUPTA",
        "HARSHITGUPTA",
        "SAYANTANMUKHERJEE",
        "SUDITISAHA",
        "SAMPADADASH",
        "SURJAYANBANERJEE",
        "SAMYAKPADHY",
        "RAJANYACHATTERJEE",
        "ARYANMITRA",
        "ANISHABARIK",
        "SRISTITANTI",
        "ANWITABOSE",
        "SAGNIKNASKAR",
        "JISHNUMAITI",
        "ANANTHSURESH",
        "SHUVANGEEGHOSH",
        "ARYANDAS",
        "BIRAJAPRASADPRADHAN",
        "PRAKRITISENSHARMA",
        "ABHINEETASH",
        "ARNESHCHAKRABARTI",
        "ISHANMANDAL",
        "PREETISASMAL",
        "ISHANMANDAL",
        "SAMYARAJCHOWDHURY",
        "ATRAYUCHAKRABORTY",
        "SOUMILIDEY",
        "ARYADITYAGHOSH",
        "SHREYANSHKOTHARI",
        "ISHAANBISWAS",
        "ARYAKASIKDAR",
        "ANUBHAVGUHA",
        "AYANTIKAMAZUMDER",
        "SHREYABANERJEE",
        "PRITHURAJSAHA",
        "ISHAANSENAPATII",
        "DEBANKUSHKUNDU",
        "JAIHIRAWAT",
        "SHLOKAGARWAL",
        "ANKITKEJRIWAL",
        "NIHARIKAPAUL",
        "FARIAFAIZ",
        "SMYANSRIVASTAVA",
        "DIPTODEEPBISWAS",
        "AAYUSHSINGH",
        "SHRESHTHADAS",
        "SUJATRODEBNATH",
        "SHRINJAYBOSE",
        "SHREYANSHCHAUDHURI",
        "SOHAMPODDAR",
        "UTSAVACHAR",
        "ARADHANADASSARMA",
        "RUPSABASUROY",
        "MDALIQAMAR",
        "SARTHAKROY",
        "ABHILASHROY",
        "RISHWANCHANDA",
        "SRISTISAH",
        "SHELLYDASHORA",
        "ADITYANARAYANBASU",
        "VAIDEHITANEJA",
        "KINGKINIDAS",
        "SHAYORIBHATTACHARYA",
        "ANUSHKASENAPATI",
        "ANUSHKASENAPATI",
        "RUDRANSISHBHATTACHARYA",
        "HARSHILRUPCHANDANI",
        "SAMBITSARDAR",
        "SWAPNILBASU",
        "SOUSHREECHAKRABORTY",
        "PRAYASHPROTIMGOSWAMI",
        "TANISHKASINHA",
        "SRINIKMANDAL",
        "SATWIKNAG",
        "IPSITAROY",
        "ADIYAROY",
        "ARIJITGHOSH",
        "ARIJITGHOSH",
        "AINESHBANERJEE",
        "SYEDRAHILAHMED",
        "AVANINDRACHAKRABORTY",
        "ISHAANBANERJEE",
        "RAJVEERSINGH",
        "SHREYABARDHAN",
        "PADMANAVAMUKHERJEE",
        "SUDIKSHACHOUDHURY",
        "JAGRITICHAKRABARTI",
        "RAMONKITBHATTACHARYYA",
        "ADRIJAMAJUMDER",
        "SHREYASHIJHA",
        "ANUSKAAGHOSH",
        "SRIJANBANDYOPADHYAY",
        "ANIKETDINDA",
        "SIDDHARTHDUTTA",
        "ARYANSENGUPTA"
    ];
    s=0
    
    for(var i =0;i<(namesArray.length);i++){
        
        if (namesArray[i]== naam){
            
            loggedname().then((deets)=>{
                arr=(deets.split('\r'))
                console.log(arr[arr.length-2],arr.length)
                f=0
                for(var j=1;j<arr.length;){
                    //console.log(arr[j].substring(1),naam)
                    //console.log(arr[j])
                    console.log('ll')
                    if (naam==arr[j]||naam==arr[j].substring(1))
                       { //console.log(arr[j],j,'12344')
                        f=1
                        break
                       }
                    j+=1
                }
                console.log(f)
            if (f==0){
            res.sendFile(path.join(__dirname + '/login.html'));
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



