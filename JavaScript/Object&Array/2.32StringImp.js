//1.slice() method

//slice(indexStart)
// slice(indexStart, indexEnd)

const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

        // 2. split() method

const str2 = "The quick brown fox jumps over the lazy dog.";

const words = str2.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str2.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str2.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// 3. StartWith

const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// Expected output: true

console.log(str1.startsWith("Sat", 0));
// Expected output: false

//  4. ToString

const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"

// 5.  toWellFormed()

// const illFormed = "https://example.com/search?q=\uD800";

// try {
//   encodeURI(illFormed);
// } catch (e) {
//   console.log(e); // URIError: URI malformed
// }

// console.log(encodeURI(illFormed.toWellFormed())); // "https://example.com/search?q=%EF%BF%BD"

// 6.  String.trim()

const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

// 7. Trim end and start

const greeting1 = "   Hello world!   ";

console.log(greeting1);
// Expected output: "   Hello world!   ";

console.log(greeting1.trimEnd());
// Expected output: "   Hello world!";

const greeting2 = "   Hello world!   ";

console.log(greeting2);
// Expected output: "   Hello world!   ";

console.log(greeting2.trimStart());
// Expected output: "Hello world!   ";

// 8. valueof()

const stringObj2 = new String("foo");

console.log(stringObj2);
// Expected output: String { "foo" }

console.log(stringObj2.valueOf());
// Expected output: "foo"
