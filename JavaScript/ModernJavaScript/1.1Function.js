// ECMASCRIPT ES6-2015
let add = function(a,b,c){
    return a+b+c;
}

console.log(add(23,45,56));

// Arrow Function

let getScoreTest = (name, score) => {
    console.log("Name:" + name + score);
    console.log(`Name:${name}  
    Score:${score}`); 
}

getScoreTest("UTHRA", 4534);

alpha = ["a", "b", "c", "d", "e"];
//ES5 //All modern Brower
alpha.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

