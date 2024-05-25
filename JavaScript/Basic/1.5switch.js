// SWITCH Case

// const action = "say_hello";
// switch (action) {
//   case "say_hello":
//     const message1 = "hello";
//     console.log(message1);
//     break;
//   case "say_hi":
//     const message2 = "hi";
//     console.log(message2);
//     break;
//   default:
//     console.log("Empty action received.");
// }

const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}