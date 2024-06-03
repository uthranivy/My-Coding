// Array - ordered collection or index

let employee = ["Raj"];
// console.log(employee);
employee[2] = "Kumar";
// console.log(employee);

employee.push("Arun"); // push last
// console.log(employee);
// console.log(employee.length);

for (let getData of employee) {
  console.log(getData);
}

for (let getData in employee) {
  console.log(employee[getData]);
}

alpha = ["a", "b", "c", "d", "e"];
//ES5 //All modern Brower
alpha.forEach((item, index) => {
  console.log(item, index);
});

// employee.pop(); //pop last
// console.log(employee);

// employee.shift(); // shift or delete first
// console.log(employee);

// employee.unshift("Dinesh"); // unshift or add first
// console.log(employee);

// const animals = ["pigs", "goats", "sheep"];

// const count = animals.push("cows");
// console.log(count);
// // Expected output: 4
// console.log(animals);

// let student = [
//   "Raj",
//   "Anu",
//   "Siva",
//   "Arjun",
//   [1, 2, 3, 4],
//   5644,
//   { name: "vishal" },
//   function (name) {
//     return "Welcome to MLC tutorial";
//   },
// ];

// console.log(student[4]);

// if the data is key based we have to use (in loop)

// if your data is index based or order based we have to use (of loop)

// console.log(student[6]);
