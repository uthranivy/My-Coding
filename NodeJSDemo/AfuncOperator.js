

function checkOutput(val){ 
    let message;
    let checkNum = 10;
    if(val > 10){
         message = val + 'was larger than ' + checkNum;
    }else{
        message = val + 'was less than ' + checkNum;
   }
    return message;
} 

let count =  3; 
console.log(checkOutput(count));
count++;
count+=8;
console.log(checkOutput(count));



