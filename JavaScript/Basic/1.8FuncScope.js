// Function Scope

let userName = "Uthra"; //Global Variable

function LogIn(){
    userName = "Ganesh";
    console.log(userName);
}

LogIn();

        // var 

var x = 10;

function varFunc() {
    if (true) {
        var y = 9

        // It prints 9
        console.log(y);
    }
 
    console.log(y);
}
varFunc();

// It prints 10
console.log(x);

        // Example 2

var fullMoon = true;

// Initialize a global variable
let species = "human";

if (fullMoon) {
  // Initialize a block-scoped variable
  let species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);



            // let

let a = 10;
function f() {
    if (true) {
        let b = 9

        // It prints 9
        console.log(b);
    }

    // It gives error as it
    // defined in if block
    // *******console.log(b);**********
}
f()

// It prints 10
console.log(a)


var fullMoon1 = true;

// Initialize a global variable
let species1 = "human";

if (fullMoon1) {
  // Initialize a block-scoped variable
  let species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species1}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species1}.`);

            // Hoisting

var m = 100;

function hoist() {
  // A condition that should not affect the outcome of the code
  if (false) {
    var m = 200;
  }
  console.log(m); // it can access function level declaration of the variable but let can be access global variable it could be access block level scope
}

hoist();

let x1 = true;

function hoist1() {
  // Initialize x in the function scope
  if (3 === 4) {
    let x1 = false;
  }
  console.log(x1);
}

hoist1();

// const values cannot be reassigned, they are mutable as it is possible to modify the properties of objects declared with const.


const CAR = {
	color: "blue",
	price: 15000
}

// Modify a property of CAR
CAR.price = 20000;

console.log(CAR);

