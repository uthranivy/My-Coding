// const fs = require('fs');  
// const fileName = './test.txt';  
// const data = fs.readFileSync(fileName,'utf8');  
// console.log(data);  

// const arr = ['red', 'blue', 'green'];  

// function addMe(data){  
//     fs.appendFile(fileName,'\n' + data,(err)=>{  
//         if(err) throw err;  
//         console.log('DONE');  
//     });  
// }  

// arr.forEach((ele)=>{  
//     addMe(ele);  
// });  


const path = require('path');  
const fileName = 'new1.html';  
const dir = 'public';  
console.clear();  
const url = path.join('/', '.', dir, fileName);  
console.log(url);  

console.log(path.dirname(url));  
console.log(path.basename(url));  
console.log(path.extname(url));  

const info = path.resolve(fileName);  
console.log(info);