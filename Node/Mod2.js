const person = require('./Mod2Test');  

const friend1 = new person('Laurence', 'Svekis');  
const friend2 = new person('Jane', 'Doe');  
const friend3 = new person('Jack', 'Jillman');  

console.log(friend1.first);  
console.log(friend1.last);  
console.log(friend1.myName());  
console.log(friend2.myName());  
console.log(friend3.myName()); 