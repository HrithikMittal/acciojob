const array = [1, 2, 3, 4, 5];

const res = array.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(res);

const words = ["a", "b", "c", "d", "e"];

console.log(array.join(""));

const str = "Adhikansh Mittal";
console.log(str.split(" "));

const description = "I am a Coder and I love coding";
console.log(description.split("l"), description.length);
console.log(description);

const word = "Heoooo";
console.log(word.split("o"));

console.log(" ==== Slice ==== ");

const arr = [10, 20, 30, 40, 50];
console.log(arr.slice(1, 4));
console.log(arr);

console.log(" ==== Splice ==== ");

console.log(arr.splice(2, 1));
console.log(arr);

console.log(arr.splice(2, 0, "Adhi"));
console.log(arr);

// const temp = [];

// if (temp.length) {
//   console.log("first");
// }

console.log(" === Question 1 === ");
const arr1 = [10, 20, 30, 40, 50];
// [20, 40, 50]

const res1 = arr1.filter((val, index) => {
  if ([0, 2].includes(index)) {
    return false;
  }
  return true;
});

console.log(res1);

console.log(" ==== Sort ==== ");

const wordsArr = ["d", "v", "ab", "aa", "b"];
wordsArr.sort();
console.log(wordsArr);

const unsortedArray = [30, 10, 20, 100];
// "30" , "10" , "20", "100"
// unsortedArray.sort();
// console.log(unsortedArray);

let ind = 0;
unsortedArray.sort((num1, num2) => {
  console.log(num1, num2, ind);
  ind++;
  if (num1 < num2) {
    return -1;
  }
  return 1;
});

// unsortedArray.sort((num1, num2) => {
//   return num2 - num1;
// });

console.log(unsortedArray);

console.log(" ==== Question2 ==== ");
let mixedArray = [10, "Rajiv", 2, "Punit", 3, "Deepanshu"];

function customSort(mixedArray) {
  const numbers = mixedArray.filter((item) => {
    return typeof item === "number";
  });
  const strings = mixedArray.filter((item) => {
    return typeof item === "string";
  });

  numbers.sort((a, b) => {
    return a - b;
  });

  strings.sort();

  return [...numbers, ...strings];
}

console.log(customSort(mixedArray));
// [2,3,10,"Deepanshu","Punit","Rajiv"]

console.log(" ==== Question3 ==== ");
// without using sort

function secondLarget(arr) {
  let largest = 0;
  let secondLarget = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarget = largest;
      largest = arr[i];
    } else if (arr[i] > secondLarget && arr[i] !== largest) {
      secondLarget = arr[i];
    }
  }

  return secondLarget;
}

console.log(secondLarget([10, 20, 4, 5, 99]));

console.log(" ==== Question4 ==== ");
function customSplit(str, delimiter) {
  let res = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === delimiter) {
      res.push(word);
      word = "";
      continue;
    }
    word = word + str[i];
  }
  res.push(word);
  return res;
}

console.log(customSplit("hello-world-this-is-js", "-"));
