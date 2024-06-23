// Rest Parameter - Javascript ECMA6
//  ...

// function sum(...args){
//     // return a+b;
//     let result =0;
//     for(let arg of args){
//       result += arg;
//     }
//     return result;
// }
// var myResult = sum(1,2,3,4,5,6,7,8);
// console.log(myResult);


// ...args Pass as Array of data []

// function myData(...x){
//     console.log(x);
// }

// Output: [ 'Africa', 'Asia', 'Europe', 'Australia', 'America' ]

var myData = ['Africa', 'Asia', 'Europe', 'Australia', 'America'];

var newArray =['Atlantic', 'Green Land', ...myData];

console.log(newArray);

