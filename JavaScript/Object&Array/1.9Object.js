// let mybreakfast1 = "Dosa";
// let mybreakfast2 = "Idli";

// let employee = "Anu";
// let employeeage = 25;

// let employee = new Object() // objject creation

let employee = {
  name: "Anu",
  age: 32,
  email: "abcxyz@example.com",
};

let flights = {
  flightName: "indigo",
  deptDate: "8.00 AM",
  arrivelDate: "10.00 AM",
  price: "3450",
};

// console.log(flights); // give all value
// console.log(flights.deptDate);
// console.log(flights.flightName);

// for in or off

for (let mydata in flights) {
  // console.log(flights[mydata]);
  if (flights[mydata] === "3450") {
    console.log(flights[mydata]);
  }
}
