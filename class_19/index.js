// Topics to revise
// 1. Array
const arr = [1, 2, 3, 45];
const obj = {
  0: 1,
  1: 2,
  2: 3,
  3: 45,
};
console.log(typeof arr);
console.log(obj[1]);
console.log(arr[1]);
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

const mixedArr = [true, 1, "Rajiv", "", null, undefined, 0, false];
console.log(mixedArr);
console.log(typeof mixedArr[4]);
console.log("====");
for (let i = 0; i < mixedArr.length; i++) {
  console.log(typeof mixedArr[i]);
}

// key:value
const tempObj = {
  1: "hello",
  he: "Hola",
  "he as": "Heee as",
  true: "Trrrrrr",
  null: "asasa",
  a1sa: "Hello",
};
console.log(tempObj["a1sa"]);

// 2. Function Recursion
// 5! = 5*4*3*2*1
// 10! = 10*9*8*7*6*5*4*3*2*1
console.log("=== Function Recursion ===");
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  const res = n * factorial(n - 1);
  console.log(n, res);
  return res;
}

// factorial(5) → 5 * factorial(4) -> 5*4*3*2*1
// factorial(4) → 4 * factorial(3)
// factorial(3) → 3 * factorial(2)
// factorial(2) → 2 * factorial(1)
// factorial(1) → Base case reached, returns 1

console.log(factorial(10));
console.log(factorial(5));
console.log(" ==== String Reverse Using Recursion ==== ");

function reverseString(str) {
  if (str === "") {
    return "";
  }
  const firstElement = str[0];
  const remainingElements = str.slice(1);
  return reverseString(remainingElements) + firstElement;
}

console.log(reverseString("hello"));
// reverseString("hello") → reverseString("ello") + "h"
// reverseString("ello") → reverseString("llo") + "e"
// reverseString("llo") → reverseString("lo") + "l"
// reverseString("lo") → reverseString("o") + "l"
// reverseString("o") → reverseString("") + "o" (Base Case Reached)
// Returns: "o" + "l" + "l" + "e" + "h" → "olleh"

// 3. Arrow function
console.log(" ==== Arrow Functions Start ====");

function funcName(param1 = "Sir", param2 = "Ji") {
  return param1 + " " + param2;
}

console.log(funcName("Adhikansh", "Mittal"));
console.log(funcName("Deepanshu", "Sharma"));
console.log(funcName("Deepanshu"));
console.log(funcName());
console.log(funcName("Deepanshu", "Sharma", "Hola"));

const addBase = (a, b, c, d) => {
  console.log(a, b, c, d);
};

// function addBase(a, b, c, d) {
//   console.log(a, b, c, d);
// }

const add = (...args) => {
  console.log(args);
};
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5, 6, 7, 8);
console.log(" ==== Arrow Fuctions END ====");

// 4. Array methods -> splice, slice, reduce, map, filter, shift, unshift, pop, push
console.log("=== Array Methods ===");
let newArr = [12, 34, 12, 3412, 455];

console.log(newArr.length);
const res = newArr.push(90);
console.log(res, newArr, newArr.length);

const popEke = newArr.pop();
console.log(popEke, newArr, newArr.length);

const ele = newArr.unshift("Adhikansh");
console.log(ele, newArr);

const shiftedElement = newArr.shift();
console.log(shiftedElement, newArr);
console.log("START:", newArr);

for (let i = 0; i < 10; i++) {
  const removedElemenet = newArr.shift();
  console.log(removedElemenet, newArr);
}
console.log("ENDED:", newArr);

newArr = [12, 34, 13, 3412, 455];

const evenArr = newArr.filter(function (element, index) {
  console.log(element, index);
  if (element % 2 === 0) {
    return true;
  }
  return false;
});
console.log("evenArr", evenArr);

const func = () => {
  console.log("FUNC calling");
};

const funcReturn = func();
console.log(funcReturn);

console.log("==== MAP ====");
newArr = [12, 34, 13, 3412, 455];
const alrArr = newArr.map((value) => {
  if (value % 2 === 0) {
    return value * 2;
  }
  return value;
});
console.log(alrArr);

console.log("==== Reduce ====");
newArr = [12, 34, 13, 3412, 455];
const value = newArr.reduce((accVal, currentElement) => {
  return accVal - currentElement;
}, 0);

console.log(value);
const arrOfPlace = [
  { place1: "Ajmer" },
  { place2: "Delhi" },
  { place3: "Pakistan" },
  { place3: "India" },
];

const AccPlace = arrOfPlace.reduce((accVal, currentElement) => {
  return {
    ...accVal,
    ...currentElement,
  };
}, {});
console.log("AccPlace", AccPlace);

console.log("==== Slice ====");
newArr = [12, 34, 13, 3412, 455];
const subArr = newArr.slice(0, 3);
console.log("subArr", subArr);

console.log("==== Splice ====");
newArr = [12, 34, 13, 3412, 455];
const deletedArr = newArr.splice(1, 1, 99);
console.log(deletedArr, newArr);

// 5. Nested loops (2d arrays)

console.log("=== Nested loops ====");
const nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(nestedArr[1][1]);

const tempArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < tempArr.length; i++) {
  const tempArrElement = tempArr[i];
  for (let j = 0; j < tempArrElement.length; j++) {
    console.log(i, j, tempArrElement[j]);
  }
}

// 6. if else
console.log(" === if else ===");
// undefined
// 0
// null
// ""
// false
// NaN

if (2 - 2) {
  console.log("This is true execute");
} else {
  console.log("This is false execute");
}

if (console.log("Hello World")) {
  console.log("This is true execute");
} else {
  console.log("This is false execute");
}

// 7. Do while Loop
console.log("=== Do While Loop ===");
let i = 0;
do {
  console.log(i);
  i--;
} while (i > 0);

// Question practice
console.log("=== Question ===");

// Triangle Type Checker:
// Write a program that takes three sides of a triangle and determines if it is
// equilateral, isosceles, or scalene.

// Temperature Converter:
// Write a program that converts temperatures between Celsius and Fahrenheit.
// (0°C × 9/5) + 32 = 32°F
