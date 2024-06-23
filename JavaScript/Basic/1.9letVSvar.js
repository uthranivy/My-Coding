// var can assign var name more
var a = 10;
console.log(a);
var a;

// let not redeclare the var with same name
let b = 20;
b=34;
console.log(b);
// let b = 10;    

let x = 10;
console.log(x);
if(x == 10){
    let x = 20;
    console.log(x);
}
console.log(x);

var y = 10;
console.log(y);
if(y == 10){
    let y = 20;
    console.log(y);
}
console.log(y);
