// Arithmetic Operator

// Addition
console.log(5 + 4);
console.log(5 + "1");
console.log("5" + 1);

// Subtraction
console.log(5 - 4);
console.log(5 - 14);
console.log(5 - "1");
console.log("==>", "5" - "1");

// Multiplication
console.log(5 * 4);

// Division
console.log(5 / 3);
console.log(22 / 7);

// Modulus (remainder)
console.log(5 % 3);
console.log(2 % 3);

// Exponentiation
console.log("===Exponentiation===");
console.log(5 ** 3);
console.log(5 ** 2);

console.log("==== Expression ====");
console.log(5 + 1 * 3);

// Comparison Operator
// == Equal to
console.log(5 == "5");

// === Strict equal to
console.log(5 === "5");

// != Not equal to
console.log(5 != "5");
console.log(5 != 3);

// !== Strict Not equal to
console.log(5 !== "5");
console.log(5 !== 5);

// > Greater than
console.log("=== Greater than ===");
console.log(5 > 3);
console.log(3 > "5");

// < Less than
console.log("=== Less than ===");
console.log(5 < 3);

// >= Great than or equal to
console.log(">= Great than or equal to ===");
console.log(5 >= 3);
console.log(5 >= 5);

// <= Less than or equal to
console.log("<= Less than or equal to ===");
// console.log(5 < 3);

// Conditional Operator or Ternary Operator
// condition ? True case : False case

if (5 >= 3) {
  // True
} else {
  // False
}

const res = 5 >= 3 ? "This is true" : "This is false";
console.log(res);

// Assignment Operators
console.log("===Assignment Operators====");

// = Assign
let x = 5;
console.log(x);

// += Add and Assign
x += 10; // ---> x = x + 10
console.log(x); // 15

// -=
x -= 10; // ---> x = x - 10
console.log(x); // 5

// *=
x *= 10; // ---> x = x * 10
console.log(x); // 50

// /=
x /= 10; // ---> x = x / 10
console.log(x); // 5

// %=
x %= 10; // ---> x = x % 10
console.log(x); // 5

// **=
x **= 10; // ---> x = x ** 10
console.log(x); // 5 ^ 10

// Logical Operators
console.log("=== Logical Operators ===");
// Logical AND -> &&
// condition1 condition2
// if(condition1 AND condition2){

// }

// condition1 = true && condition2 = true -> true
console.log(5 > 3 && 4 < 6);

// condition1 = false && condition2 = true -> false
console.log(5 < 3 && 4 < 6);

// condition1 = true && condition2 = false -> false
console.log(5 > 3 && 4 > 6);

// condition1 = false && condition2 = false -> false
console.log(5 < 3 && 4 > 6);

console.log("=== Logical OR ===");
// Logical OR -> &&
// condition1 condition2
// if(condition1 OR condition2){

// }

// condition1 = true || condition2 = true -> true
console.log(5 > 3 || 4 < 6);

// condition1 = false || condition2 = true -> true
console.log(5 < 3 || 4 < 6);

// condition1 = true || condition2 = false -> true
console.log(5 > 3 || 4 > 6);

// condition1 = false || condition2 = false -> false
console.log(5 < 3 || 4 > 6);

// Logical NOT !
console.log("=== Logical NOT ===");

console.log(!true);

console.log(!false);

console.log("============================");
// if (condition is true) {
// } else {
// }

// 0
// false
// "" (empty string)
// null
// undefined
// NaN

// let a = "";
// if (a) {
//   console.log("This condition satisfied");
// } else {
//   console.log("This is false");
// }

let a = 5;
let b = 0;

// BODMAS && ||

// console.log((a && b) || 10); // 10

// console.log(a || (b && 20)); // 5

// Short Circuiting
console.log(0 && "Hello" && 42); // 0
console.log("Adhi" && null && 42); // null
console.log(42 && "Hello" && 63); // 63

console.log("============================");
console.log(0 || "Hello" || 42); // 'Hello'
console.log("Adhi" || null || 42); // 'Adhi'
console.log(42 || "Hello" || 63); // 42

console.log("=== Question 3 ===");
const min = 5;
const max = 15;
const num = 8;
// Check if the number is within the range of min and max inclusive and num is even number

console.log(num >= min && num <= max && num % 2 == 0);

// num1 % num2  ->

console.log("=== Question 4 ===");
const y = 1;

console.log("=== Sol 1 ===");
// Check if y is truthy value then print 'Truthy' otherwise print 'Falsy'
if (y) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

console.log("=== Sol 2 ===");
const res1 = y ? "Truthy" : "Falsy";

console.log(res1);
