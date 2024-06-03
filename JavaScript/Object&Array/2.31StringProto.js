// 1. Repeat

const mood = "Happy! ";
console.log("***Repeat***");
console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

//2. Replace

const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log("***Replace***");
console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

// 3.Replace All

const paragraph1 = "I think Ruth's dog is cuter than your dog!";
console.log("***ReplaceALL***");
console.log(paragraph1.replaceAll("dog", "monkey"));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex1 = /Dog/gi;
console.log(paragraph1.replaceAll(regex1, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"

// 4. Match
//  A global search for numbers that are NOT from 1 to 4:</p>

// The \w metacharacter matches word characters.

// A word character is a character a-z, A-Z, 0-9, including _ (underscore).

let text = "123456789";
let pattern = /[^1-4]/g; // ^ it means not
let result1 = text.match(pattern);

console.log("***Match***");
console.log(result1);

// 5. Search

const paragraph2 = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex2 = /[^\w\s']/g;
console.log("***Search***");

console.log(paragraph2.search(regex));
// Expected output: 41

console.log(paragraph2[paragraph2.search(regex)]);
// Expected output: "!"
