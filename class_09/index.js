// if( condition ) {

// }

// if (true) {
//   console.log("This is Truthy value!");
// }

// if (1) {
//   console.log("This is Truthy value!");
// }

// if (1 - 1) {
//   console.log("This is 2nd Truthy value!");
// }

// if (2 * 2 + 1 - 1 + 9) {
//   console.log("This is 3rd Truthy value!");
// }

if (console.log("Hey! I am Adhi")) {
  console.log("This run");
}
console.log(console.log("Hey! I am Adhi"));

// function function_name(function_param_1,function_param_2){
//    function_param_1 + function_param_2
// }

// Function declare/definition
function oak(a, b) {
  console.log(`Sum is ${a + b}`);
}

function tiger(a, b) {
  return a + b;
}

// Function call/execution
// oak(3, 4);
const res = tiger(3, 4);
// console.log(res);

console.log("=======");
// console.log(oak(4, 4));
// console.log(tiger(4, 4));
// console.log(8);

// if (oak(4, 5)) {
//   console.log("OAK called");
// }

if (tiger(0, 0)) {
  console.log("Tiger called");
} else {
  console.log("Tiger not called");
}

if (!0) {
  console.log("0 called");
} else {
  console.log("0 not called");
}

console.log("==== Question 1 ====");
const a = 10;

if (a > 10) {
  console.log("a is greater than 10");
} else if (a > 8) {
  console.log("a is greater than 8");
} else if (a > 6) {
  console.log("a is greater than 6");
} else if (a > 4) {
  console.log("a is greater than 4");
} else {
  console.log("a is not greater than 4");
}

console.log("=== Question 2 ===");
let num = 7;

if (num > 5) {
  console.log("Greater than 5");
} else if (num > 6) {
  console.log("Greater than 6");
} else {
  console.log("Less than or equal to 6");
}

console.log(" ==== Question 3 ====");

let y = 18;
if (y > 5) {
  if (y < 10) {
    if (y === 8) {
      console.log("Perfect match!");
    } else {
      console.log("Not an exact match!");
    }
  }
} else {
  console.log("Out of range!");
}

console.log(" ==== Question 4 ====");
let z = 4;
if (z > 2 || z < 6) {
  if (z > 3 && z < 5) {
    console.log("Condition Met!");
  }
} else {
  console.log("Else Block Triggered!");
}

console.log(" ==== Question 5 ====");
y = 5;

if ((y > 2 && y < 10) || (y === 5 && y < 3)) {
  console.log("Condition 1 met");
} else if (y < 6 || (y > 4 && y != 5)) {
  console.log("Condition 2 met");
} else {
  console.log("Condition 3 met");
}

console.log(" ==== Question 6 ====");

let x = 0.1 + 0.2;
if (x === 0.3) {
  console.log("Equal to 0.3");
} else {
  console.log("Not Equal to 0.3");
}
