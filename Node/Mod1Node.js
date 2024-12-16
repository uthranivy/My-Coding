
// Types of Module: Built-in, Custom, Third Party Module

// Built-in Module

const os = require('os');
console.log("Platform " + os.platform());
console.log("Arch ")


// Custom Module

const test1 = require('./test1.js');  
const test2 = require('./test2');  
//console.log(module.filename);  

test1.test1();  
console.log(test1);  

const myName = `${test1.person.first} ${test1.person.last}`;  
const myName2 = `${test2.person.first} ${test2.person.last}`;  

console.log(myName);  
console.log(myName2);  