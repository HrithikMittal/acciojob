const arr = [1, 2, 3, 4];
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(" === Reverse Array Print ==== ");
const len = arr.length;
for (let i = 0; i < len; i++) {
  console.log(arr[len - i - 1]);
}

console.log(" === Reverse Array Print 2 ==== ");

for (let i = len - 1; i >= 0; i--) {
  console.log(arr[i]);
}

console.log(typeof arr);
console.log(Array.isArray(arr));

const str = "Adhikansh";
console.log(Array.isArray(str));

// [[1,2,3],[4,5,6],[7,8,9]]
// nested[0] -> [1,2,3]
// nested[0][0] -> 1
const nested = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < nested.length; i++) {
  for (let j = 0; j < nested[i].length; j++) {
    console.log(nested[i][j]);
  }
}

console.log(" === Question 1 === ");
// * * * *
// * * * *
// * * * *

for (let i = 0; i < 3; i++) {
  let str = "";
  for (let k = 0; k < 4; k++) {
    // console.log(" * ");
    str = str + " * ";
  }
  console.log(str);
}

console.log(" === Question 1 Soln2 === ");
for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 4; k++) {
    process.stdout.write(" * ");
  }
  console.log("");
}

console.log(" === Question 1 Soln3 === ");
for (let i = 0; i < 3; i++) {
  console.log(" * ".repeat(4));
}

console.log(" === Question 2 === ");

const a = Math.random();
const fl = Math.floor(1.8);
const cl = Math.ceil(1.3);
const ru = Math.round(1.8);

console.log(fl, cl, ru);

// 12345
// function reverseNumber(num) {
//   let result = 0;

//   const lastDigit = num % 10;
//   // num = 12345
//   // lastDigit = 5
//   result = lastDigit;
//   //   result = 5;

//   num = num / 10;
//   //   num = 1234.5

//   num = Math.floor(num);
//   //   num = 1234

//   const lastDigit_1 = num % 10;
//   //   num = 1234
//   // lastDigit_1 = 4

//   result = result * 10;
//   //   result = 50

//   result = result + lastDigit_1;
//   //   result = 54

//   num = num / 10;
//   //   num = 123.4

//   num = Math.floor(num);
//   //   num = 123
// }

function reverseNumber(num) {
  let result = 0;
  while (num > 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(10100)); // 54321

console.log(" ==== Question 3 ==== ");

let n = 3;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    console.log(i, j);
    if (i === j) break;
  }
}

console.log(" ==== Question 4 ==== ");

// 30
// 3

function digitSum(num) {
  while (num > 9) {
    let result = 0;
    while (num > 0) {
      result = result + (num % 10);
      num = Math.floor(num / 10);
    }
    num = result;
  }
  return num;
}

console.log(digitSum(9876));

console.log(" ==== Question 5 ===");

console.log("1".repeat(5));

// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

console.log(" ==== Question 6 ===");

// *****
// ****
// ***
// **
// *
for (let i = 0; i <= 5; i++) {
  console.log("*".repeat(5 - i));
}

console.log(" ==== Question 7 ===");

//      *
//     ***
//    *****
//   *******
//  *********

for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
}

//  0 -> 1
//  1 -> 3
//  2 -> 5
//  3 -> 7
//  2*i - 1
