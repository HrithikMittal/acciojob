let name;

name = "Adhikansh Mittal";

let age = 24;
let height = 6.0;

console.log(`My name is ${name} and age is ${age}`);
console.log(typeof name);
console.log(typeof age);
console.log(typeof height);

let firstName = "Adhikansh";
let lastName = "Mittal";

console.log(firstName * lastName);

let firstNum = "3";
let secNum = "4";
console.log(firstNum * secNum);

console.log(typeof firstNum);

// var collegeName = "V.I.T. University";
// let vs const

let collegeName = "VIT";
console.log("collegeName 1st: ", collegeName);
var myCar = "kia";

function logging() {
  //   collegeName = "V.I.T. University";
  //   var state = "Tamil Nadu";
  console.log("Log: Some data: ", myCar, collegeName);
}

logging();

// console.log(state);
console.log(a);
var a = "abc";

if (2 === 2) {
  var a = "Tamil Nadu";
  console.log("===", a);
}

console.log("collegeName 3rd: ", collegeName, a);

// Feature              var                                 let
// Scope                Function-scoped                      Block-scoped
// Hoisting             Hoisted, initialized to undefined    Hoisted, not initialized
// Redeclaration        Allowed                              Not allowed
// Global object prop   Yes                                  No

function Scopp() {
  let y = 20;
  const z = 30;
  console.log(y);
  console.log(z);
}

Scopp();
// console.log(y);
// console.log(z);

function Scoppv2() {
  if (2 == 2) {
    var abc = 10;
    let b = 20;
    const c = 30;
  }
  console.log("START FROM HERE:", abc);
  //   console.log(b);
  //   console.log(c);
}

Scoppv2();
console.log("END FROM HERE:", abc);
