// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let inputArr = [];
// var lineNumber = -1;

// let count = 1;

// while (true) {
//   let inputNum;
//   rl.question("", (num) => {
//     console.log("THIS IS out" + num);
//     inputNum = num;
//   });
//   rl.close();
//   if (inputNum % 2 != 0) {
//     break;
//   }
//   count++;
// }

// let count = 0;
// rl.on("line", (num) => {
//   count++;
//   if (parseInt(num) % 2 != 0) {
//     console.log(count);
//     rl.close();
//   } else {
//   }
// });

// let count = 0;
// let num = 0;

// rl.on("", (num) => {
//   if (parseInt(num) % 2 != 0) {
//     ++count;
//     console.log(count);
//     rl.close();
//   } else {
//     count = count + 1;
//   }
// });

// let count = 0;

// function takeInput() {
//   rl.question("", (num) => {
//     const n = parseInt(num);
//     count++;

//     if (n % 2 != 0) {
//       console.log(count);
//       rl.close();
//     } else {
//       takeInput();
//     }
//   });
// }

// takeInput();

// rl.on("line", (input) => {
//   console.log(`Received: ${input}`);
//   if (input === "exit") {
//     rl.close();
//   }
// });

// console.log('Enter lines of text (type "exit" to quit):');

var readline = require("readline").createInterface(process.stdin);

// readline.question("", (str) => {
//   console.log(str);
//   readline.close();
// });

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let N = parseInt(inputArr[0]);

  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

  console.log(ArrayProblem2(Arr, N));
}

function ArrayProblem2(arr, n) {}
