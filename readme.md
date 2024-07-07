
## Features:

 - detects tab/application change events and logs it in log.txt logs off the user on 2nd attempt.
- has a client side timer(dont have the bandwidth for a serverside one)
- logs when people logged in, in logged.txt
- if single login is turned on once someone logs in, they cant log in again till logged.txt is cleared
- google forms integration
- user input names are processed(whitespaces and capitalization taken cared off)
- logs of people who logged in will be stored in logged.txt

## Instructions:

 - add names of people(in blocks and no spaces) in names.json
- change google form link in the iframe tag of actual.html
- to turn on single login change the first line of the logged.txt to true else keep it FALSE
- change the timer by changing the no of mins in line 19 of /src/script.js. For example- 20 mins=>20, 15 mins 30 sec=>15.5
