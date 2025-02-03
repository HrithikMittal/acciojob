// if(){

// }
// else if(){

// }

let day = "Saturday";

if (day === "Monday") {
  console.log("Let's start the week!!!");
} else if (day === "Tuesday") {
  console.log("This is just a 2nd day");
} else if (day === "Friday") {
  console.log("Almost weekend!");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!");
} else {
  console.log("Just another weekday!");
}

console.log(" ==== Switch Statement === ");
switch (day) {
  case "Monday":
    console.log("Let's start the week!!!");
    break;
  case "Tuesday":
    console.log("This is just a 2nd day");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Just another weekday!");
}

let number = 111;
switch (number % 2) {
  case 0: // number % 2 == 0
    console.log("Even Number");
    break;
  case 1: // number % 2 == 1
    console.log("Odd Number");
    break;
  default:
    console.log("Not a number");
}

let marks = 85;

switch (true) {
  case marks >= 90:
    console.log("Grade A");
    break;
  case marks >= 80:
    console.log("Grade B");
    break;
  case marks >= 70:
    console.log("Grade C");
    break;
  default:
    console.log("Grade F");
}

// color Name return

// function getColorName(color) {
//   if (color === "R") {
//     return "Red";
//   } else if (color === "G") {
//     return "Green";
//   } else if (color === "B") {
//     return "Blue";
//   } else {
//     return "Unknown color";
//   }
// }

function getColorName(color) {
  switch (color) {
    case "R":
      return "Red";
    case "G":
      return "Green";
    case "B":
      return "Blue";
    default:
      return "Unknown color";
  }
}

console.log(getColorName("R"));
console.log(getColorName("G"));
console.log(getColorName("o"));

// Best for multiple exact matches         switch
// Best for range comparisons              if - else
// Readability                             switch
// Performance                             switch

console.log(" === Question 1 === ");
let x = "5";

switch (x) {
  case 5:
    console.log("This is strict equal to operator");
    break;
  case "5":
    console.log("This is equal to operator");
    break;
  default:
    console.log("We don't know");
}

console.log(" === Question 2 === ");

let num = 1;
switch (num) {
  case 1:
    console.log(num);
    num = num + 1;
  case 2:
    console.log(num);
    num = num + 1;
  case 3:
    console.log(num);
    num = num + 1;
  default:
    console.log("Done!");
}

console.log(" === Question 3 === ");

let a = 0;
switch (a) {
  case false:
    console.log("Matched false");
    break;
  case 0:
    console.log("Matched 0");
    break;
  default:
    console.log("No match");
}

console.log(" === Question 4 === ");
marks = 80;
switch (false) {
  case marks >= 90:
    console.log("Grade A");
    break;
  case marks >= 80:
    console.log("Grade B");
    break;
  case marks >= 70:
    console.log("Grade C");
    break;
  default:
    console.log("Grade F");
}

// Let, var and const
console.log("=== Let,var and const ===");

let name;
name = "Adhikansh";
console.log(name);

name = "Adhikansh Mittal";
console.log(name);

const age = 24;
console.log(age);

var college = "VIT hello";
var college = "VIT";
console.log(college);

// Types of Scopes in Js
// Global Scope
// Local (function) Scope
// Block Scope (es6)

console.log("=== Global Scope ===");

let globalVar = "I am global";

function showGlobal() {
  console.log("Global 1", globalVar);

  globalVar = "I am global re";

  console.log("Global 1 a", globalVar);
}
console.log("Global 2", globalVar);

showGlobal();

console.log("Global 3", globalVar);

console.log("=== Local Scope ===");

function myFun() {
  let localVar = "I am local";
  console.log(localVar);
}

// console.log(localVar);
myFun();
// console.log(localVar);

console.log("=== Block Scope ===");

if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar);
}

// console.log(blockVar);

function outer() {
  let outerVar = "I am from outer";
  function inner() {
    console.log("innner 1", outerVar);
    outerVar = "I am re declare from inner";
    console.log("innner 2", outerVar);
  }
  console.log("outer 2", outerVar);
  inner();
  console.log("outer 3", outerVar);
}
outer();

console.log(" === Function ====");

// function function_name(function_param_1, function_param_2) {
//   // Code execution
//   // return (optional) default Undefined
// }

// function_name(1,2);

function add(a, b = 10) {
  return a + b;
}

console.log(add(1, 2));
console.log(add(2, 2));
console.log(add(2));

function sum3(a, b = 10, c = 10) {
  return a + b + c;
}

console.log(sum3(1, 2));
console.log(sum3(2, 2));
console.log(sum3(2, 2, 2, 2));

// function add(a, b) {
//   console.log(1 + 2);
//   add(a, b);
// }

function sumOfN() {}

console.log(sumOfN(1, 2));
console.log(sumOfN(5, 623, 1));
console.log(sumOfN(5, 623, 1, 978));

console.log("==== Arrow Functions ====");

function function_name() {}

const function_name_1 = (function_param_1, function_param_2) => {
  // function logic
};

function_name_1();

const sum4 = (a, b, c, d) => {
  return a + b + c + d;
};

console.log(sum4(1, 2, 3, 4) === 10);

let logger = (stats) => {
  console.log(stats);
  return 4;
};

const res = logger("Adhi");
// logger = 4;

// log(1);
console.log(logger);
console.log(logger());
