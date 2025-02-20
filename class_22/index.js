const cleanStr = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== "@" && str.charAt(i) !== "#") {
      result = result + str.charAt(i);
    }
  }
  return result;
};

const sortUserName = (usernames) => {
  return usernames.sort((a, b) => {
    const cleanA = cleanStr(a);
    const cleanB = cleanStr(b);
    console.log(cleanA, cleanB);
    if (cleanA < cleanB) return -1;
    if (cleanA > cleanB) return 1;
    return 0;
  });
};

const input = ["@john", "hello#world", "abc", "#def"];
console.log(sortUserName(input));

const helloWorld = () => {
  console.log("Hello World");
};

// helloWorld();
console.log("Immediately Invoke Function Expression IIFE");

(() => {
  console.log("Hello World Inner");
})();

(function () {
  let a = 10;
  let b = 100;
  console.log(a + b);
})();

const sum = (a, b) => {
  return a + b;
};

const sumSingle = (a, b) => a + b;

// const SumOfArrayElements = (arr) =>
//   arr.reduce((total, currentVal) => total * currentVal);

const SumOfArrayElements = (arr) => {
  return arr.reduce((total, currentVal, index) => {
    console.log(index, total, currentVal);
    return total * currentVal;
  }, 0);
};

console.log(SumOfArrayElements([1, 2, 3, 4]));
console.log(" ==== Error Object and Try Catch Block ==== ");

// const err = new Error("Something went wrong!");
// console.log(err);
try {
  const arr = [1, 2, 3];
  console.log(ar[122]);
} catch (err) {
  console.log(err.message);
}

console.log("Hello World");

const sumOfPositiveNumber = (a, b) => {
  if (a < 0 || b < 0) {
    new Error("Number should be positive");
    return 1;
  }
  return a + b;
};

try {
  console.log(sumOfPositiveNumber(-1, 1));
} catch (err) {
  console.log(err.message);
} finally {
}

console.log("Hello World");

const fun = () => {
  try {
    console.log("HEllo World");
    throw new Error("Hello World");
    return 100;
  } catch (err) {
    console.log("Catch block", err.message);
    return 200;
  } finally {
    console.log("THIS IF FINALLY");
    return 300;
  }
};

console.log(fun());

console.log("High order functions");

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);

console.log(doubled);

function greet(greeting) {
  function Name(name) {
    return `${greeting}, ${name}`;
  }
  return Name;
}

const sayHello = greet("Hello!");
console.log(sayHello("Adhi"));

const isPalindrome = (str) => {
  let result = "";
  str = str.toLowerCase();
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] >= "a" && str[i] < "z") {
      result = result + str[i];
    }
  }
  console.log(result);
  return str === result;
};

console.log(isPalindrome("a man, a plan, a canal Panama"));

console.log(" === Set Timeout === ");

// const interval = setInterval(() => {
//   console.log("Helllllo");
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 10 * 1000);

console.log("Helllllo");

// There are n stairs, and a person standing at the bottom wants to climb stairs to
// reach the top. The person can climb either 1 stair or 2 stairs at a time,
// the task is to count the number of ways that a person can reach at the top.

//  1 -> 1
//  2 -> 2
//  3 -> 3
//  4 -> 5
//  5 -> 8

// [1,1,1,1,1],
// [2,1,1,1]
// [1,2,1,1]
// [1,1,2,1]
// [1,1,1,2]
// [2,2,1]
// [2,1,2]
// [1,2,2]

function countWays(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  return countWays(n - 1) + countWays(n - 2);
}

console.log(countWays(6));
