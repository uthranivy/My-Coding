// Why function

// block of code

let userName = "Siva"; //global variable

function info(){
    let myweb = "Uthra"; // local variable
    console.log(myweb + " site is loading" + ", It is local variable");
    console.log(userName + " site is loading" + ", It is local variable");
}
// console.error(myweb + " site is loading" + ", It is global variable declaration");
// local variable does not outside the function

// info(); // call the function

 

                // How to declare function in dom (onclick="mychildhood()")
console.log("Below Output is IF Condition");

 var mychild = "Takshvika";
 var gender = "Female";


function mychildhood(){
    if(gender == 'Female'){
            // console.log(mychild + " is my daughter");
            alert(mychild + " is my daughter");
        }else if(gender == 'male') {
            console.log(mychild + " is my son");    
        }else {
            console.log(mychild + " is other");
        }
}

 
