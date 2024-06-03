// Method => filter, find, include, map

//      1. Filter

// let age = [7, 8, 13, 3, 11];

// // call another function in the function is called callback function.
// let mylimit = age.filter((agenum) => {
//   return agenum > 7;
// });

// console.log(mylimit);

let employee = [
  { name: "Raj", skill: "react.js" },
  { name: "Arun", skill: "angular.js" },
  { name: "Tharun", skill: "vue.js" },
  { name: "Siva", skill: "next.js" },
  { name: "Vishnu", skill: "angular.js" },
  { name: "Hari", skill: "angular.js" },
];

// let mydev = employee.filter((dev) => {
//   return dev.skill === "angular.js";
// });

// console.log(mydev);

//    2. Find only get one value from array of obj

// let mydev2 = employee.find((dev) => {
//   return dev.skill === "angular.js";
// });

// console.log(mydev2);

//    3. Includes just check the value is existing or not and not check list of object.

let comPany = ["Amazon", "Flipkart", "Myntra", "Alibaba"];

console.log(comPany.includes("Myntra"));

//    4. Get Index for array of value

let mycourse = ["AWS", "Azure", "GCP", "Alibaba"];

console.log(mycourse.indexOf("GCP"));

//    5. Array Join()

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"

//    6. Array.prototype.splice()

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//  7. For Date and Time

const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
