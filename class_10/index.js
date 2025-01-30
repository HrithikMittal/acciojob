// let temp = ["Hello", "World"];

// console.log(temp[0]);

let description = "DoaNot Repeat Yoursela";
// 'a' 'e' 'i' 'o' 'u'

// console.log(description[0]);
let index = 0;

if (
  description[index] === "a" ||
  description[index] === "e" ||
  description[index] === "i" ||
  description[index] === "o" ||
  description[index] === "u"
) {
  console.log(`${index}th index is vowel ${description[index]}`);
}

index = index + 1;
// 1
if (
  description[index] === "a" ||
  description[index] === "e" ||
  description[index] === "i" ||
  description[index] === "o" ||
  description[index] === "u"
) {
  console.log(index + "st index is vowel " + description[index]);
}
// 1
index = index + 1;
//  index = 1 + 1
// index = 2
if (
  description[index] === "a" ||
  description[index] === "e" ||
  description[index] === "i" ||
  description[index] === "o" ||
  description[index] === "u"
) {
  console.log(index + "nd index is vowel " + description[index]);
}

if (
  description[3] === "a" ||
  description[3] === "e" ||
  description[3] === "i" ||
  description[3] === "o" ||
  description[3] === "u"
) {
  console.log("3rd index is vowel " + description[3]);
}

if (
  description[4] === "a" ||
  description[4] === "e" ||
  description[4] === "i" ||
  description[4] === "o" ||
  description[4] === "u"
) {
  console.log("4th index is vowel " + description[4]);
}

// For Loop
console.log("=== For Loop ===");

// for (initialization; condition; increment/decrement){
// execute code
// }

// let description = "Do Not Repeat Yourself";
let x = 0;
// console.log("Adhi".length);
for (x = 0; x <= description.length - 1; x = x + 1) {
  // x = 1, len = 22
  // x = 2, len = 22
  // x = 22, len = 22
  // x = 23, len = 22
  // code to execute
  if (
    description[x] === "a" ||
    description[x] === "e" ||
    description[x] === "i" ||
    description[x] === "o" ||
    description[x] === "u"
  ) {
    // console.log(
    //   x +
    //     (x === 1 ? "st" : x === 2 ? "nd" : x === 3 ? "rd" : "th") +
    //     " index is vowel " +
    //     description[x]
    // );
    console.log(x + suffix(x) + " index is vowel " + description[x]);
  }
  console.log("My X value: ", x);
}

console.log("Value of x", x);

function suffix(index) {
  if (index === 1 || index === 21) {
    return "st";
  }
  if (index === 2) {
    return "nd";
  }
  if (index === 3) {
    return "rd";
  }
  return "th";
}

console.log(" ==== While Loop ====");

x = 0;

while (x <= description.length - 1) {
  if (
    description[x] === "a" ||
    description[x] === "e" ||
    description[x] === "i" ||
    description[x] === "o" ||
    description[x] === "u"
  ) {
    console.log(x + suffix(x) + " index is vowel " + description[x]);
  }
  x = x + 1;
}

let i = 9;
while (i > 0) {
  console.log("HOLA!!!!!", i);
  let = "Mittal";
  if (i % 2 === 0) {
    console.log("i is even", i);
    break;
  }

  i = i - 1;
}

console.log("=======");

i = 10;
while (i > 0) {
  i = i - 1;
  if (i % 2 === 0) {
    // console.log("i is even", i);
    continue;
  }
  console.log("HOLA!!!!!", i);
}

console.log(" ===== do while ==== ");

let num = -5;
do {
  console.log(" num = ", num);
  num = num - 1;
} while (num > 0);

console.log(" ==== Question ====");
let j = 1;

while (j < 10) {
  if (j % 3 === 0) {
    break;
  }
  console.log(j);
  j++;
}

console.log(" ==== Question ====");

let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
index = 0;

while (index < fruits.length) {
  console.log(fruits[index]);
  index++; // Move to next item
}

console.log("=== Question ==== ");
x = 10;

while (x) {
  console.log(x);
  x = x - 2.5;
}
