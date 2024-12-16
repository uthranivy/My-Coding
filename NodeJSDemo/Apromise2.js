const rLine = require('readline').createInterface({  
    input: process.stdin,  
    output: process.stdout  
})  

rLine.question('What is your name?', name => {  
    console.log(name);  
    //console.log(process);  
    console.log(`Welcome ${name}`);  
    rLine.close();  
})  

process.on('exit', (val) => {  
    console.log('Process Exiting ');  
    console.log(val);  
});  

process.on('beforeExit', (val) => {  
    console.log('Before Exit');  
    console.log(val);  
});  


console.log('Last Message');  
