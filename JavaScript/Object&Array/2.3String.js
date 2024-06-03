// String Object
const string4 = new String("A String object");
console.log(string4);

const car = "Audi";
console.log(car.charAt(2)); // char count

// 2. Uppercase and Lowercase

const areEqualInUpperCase = (str1, str2) => {
  if (str1.toUpperCase() === str2.toUpperCase()) {
    console.log("true");
  } else {
    console.log("false");
  }
};

const areEqualInLowerCase = (str1, str2) => {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("true");
  } else {
    console.log("false");
  }
};

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true

//3. AT String

const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

// 4. CONCAT String

const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"

// 5. EndWith String

const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true

// 6. LastIndexOf

// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`
);
