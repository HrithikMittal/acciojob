function showThis() {
  console.log(this);
}

// showThis();

var name = "VIT Vellore";
console.log("==>", global);

const person = {
  name: "Adhikansh",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  bye: () => {
    console.log(`Bye Bye, ${this.name}`);
  },
  welcome: function () {
    // this -> name = Adhikansh
    const inner = () => {
      console.log(`Welcome! ${this.name}`);
    };
    inner();
  },
};

person.greet();
person.bye();
person.welcome();

function greet(greetings) {
  console.log(`${greetings}, my name is ${this.name}`);
}

const person1 = { name: "Adhikansh", age: 23 };

greet.call(person1, "Heeee!");
greet.apply(person1, ["Heeee!"]);

const boundGreet = greet.bind(person, "Hey");
boundGreet();

console.log("=== Question 1 ===");

const countVowels = () => {};

countVowels("JavaScript");

console.log("=== Question 2 ===");
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function isAnagramV1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj = {};
  let isBreak = false;
  for (let i = 0; i < str1.length; i++) {
    if (obj[str1[i]]) {
      obj[str1[i]] = obj[str1[i]] + 1;
    } else {
      obj[str1[i]] = 1;
    }
  }
  console.log(obj);
  for (let i = 0; i < str2.length; i++) {
    console.log(obj);

    if (obj[str2[i]]) {
      obj[str2[i]] = obj[str2[i]] - 1;
    } else {
      isBreak = true;
      break;
    }
  }

  return !isBreak;
}

console.log(isAnagramV1("listenn", "sillent"));

// Find the Missing Number in an Array
// Given an array of numbers from 1 to n with one missing number, find the missing number.

const findMissingNumber = (arr) => {
  const firstElementDiff = arr[1] - arr[0];
  const secElementDiff = arr[2] - arr[1];
  const thirdElementDiff = arr[3] - arr[2];
  let commonDiff;
  if (firstElementDiff === secElementDiff) {
    commonDiff = firstElementDiff;
  } else if (firstElementDiff === thirdElementDiff) {
    commonDiff = firstElementDiff;
  } else {
    commonDiff = secElementDiff;
  }
};

findMissingNumber([1, 2, 3, 5]); // 4

findMissingNumber([1, 3, 5, 9]); // 7

findMissingNumber([1, 5, 7, 9, 11]); // 3
