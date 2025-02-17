const str1 = "Adhikansh";
const str = `Hi Good morNing, ${str1}
He He he 
Good Bye Good Good Bye
`;
const description = 'I am very happy today, What"s" up';

console.log(description);

console.log("String Length", str.length);

console.log("Common String Methods");

console.log("First character", str[1000]);
console.log("Second character", str.charAt(1000));

console.log("To Upper Case", str.toUpperCase());
console.log("To Upper Case", str.toLowerCase());

console.log("Finds First Occurrence", str.indexOf("Good"));
console.log("Finds Last Occurrence", str.lastIndexOf("Good"));
console.log("To check Occurrence", str.includes("Good"));

console.log("Extracting part of a String");
// const str = `Hi Good morNing, ${str1}
// He He he
// Good Bye Good Bye
// `;
console.log(str.slice(1, 5));
console.log(str.substring(1, 5));
console.log(str.substr(1, 3));

console.log(str.replace("Good", "Bad"));
console.log(str.replaceAll("Good", "Bad"));

// const str = `Hi Good morNing, ${str1}
// He He he
// Good Bye Good Good Bye
// `;
const arr = str.split("Good");
console.log(arr);
const untrimmedStr = "    Hello World    ";
console.log(untrimmedStr.trim());

console.log("Concat");
let firstName = "Adhikansh";
let lastName = "Mittal";

console.log(firstName + " " + lastName + " Bye ");
console.log(firstName.concat(" ", lastName, " Bye "));

let word = "JavaScript";
// for...of
for (const char of word) {
  console.log(char);
}

const obj = {
  //   name: "Adhikansh",
  //   age: 24,
  first: "First Element",
  second: "Second Element",
};

for (let o in obj) {
  console.log(o);
}

console.log(Object.values(obj).length);

let numbers = [1, 2, 3, 4, 5, 6];

const temp = numbers.forEach((element) => {
  console.log(`Your element: ${element}`);
  element * 2;
});
console.log(numbers);

console.log(" ==== Questions ====");
const test = "Hello World, This is my codebase ";
console.log(test.trim().split(" ").length);

const info = {
  firstName: "Adhikansh",
  lastName: "Mittal",
  age: 24,
  college: "VIT",
};

const strInfo = JSON.stringify(info);
console.log(typeof strInfo);
console.log(typeof JSON.parse(strInfo));

console.log(" ==== Question 2 ====");
console.log("5" + 2 - 1);

console.log(" ==== Question 3 =====");
let h = "Hello";
h[0] = "B";
console.log(h);

console.log(" ==== Question 4 =====");
console.log("5" - -"2");

// const newVal = "Hello World";
// newVal.charAt(1) = 'E';
// newVal[1] = "E";
// console.log(newVal);

// Finding the First Non-Repeating Character
// Question: Implement an efficient function to find the first non-repeating
// character in a string.

// Hhello World

const tempStr = "Hhello World";

const firstNonRepeatingCharacter = (paramStr) => {
  let str = paramStr.toLowerCase();
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  console.log(obj);
  for (const key in obj) {
    if (key !== " " && obj[key] === 1) {
      console.log(key);
      break;
    }
  }
};

firstNonRepeatingCharacter(tempStr);
