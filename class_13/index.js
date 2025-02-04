console.log("=== Array ===");

const arr_one = [1, 2, 3, 4];

// const arr_two = arr_one;
// arr_two[0] = 4;
// console.log(arr_two);
// console.log(arr_one);

// const arr_two = [1, 2, 3, 4];
// arr_two[0] = 4;
// console.log(arr_two);
// console.log(arr_one);

// arr_two = [5, 6, 7];

console.log(...arr_one);
const abc = [...arr_one];
console.log(abc);

abc[0] = 5;
console.log(abc);
console.log(arr_one);

const names = ["Atul", "Shivani", "Pooja"];
console.log(names);
console.log(names[0]);

const [a, b, c, d] = names;
console.log(a, b, c, d);

const [favName, ...remName] = names;
console.log(favName);
console.log(remName);

console.log(" === Array Methods === ");
console.log(" === Adding & Removing Elements === ");

console.log(names);

names.push("Aditya");

console.log(names);

const qwe = names.pop();

console.log(qwe);
console.log(names);

names.unshift("Ram");
console.log(names);

names.shift();
console.log(names);

console.log(" === Search & Checking Elements === ");
const shivaniPos = names.indexOf("Shivani");
console.log(shivaniPos);

const isExists = names.includes("Adhi");
console.log("isExists", isExists);

console.log(" === Transforming Array === ");

const nums = [1, 2, 3, 4, 5];
// const funcky = (param_1) => {
//   return param_1;
// };

const numsDoubled = nums.map((param_1) => {
  return param_1 * 2;
});

console.log(numsDoubled);

const evens = nums.filter((num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
});

console.log(evens);

// const nums = [1, 2, 3, 4, 5];

const total = nums.reduce((acc, currentVal, index) => {
  console.log(index);
  return acc + currentVal;
}, 0);

console.log(total);

let words = ["banana", "apple", "apple", "orange", "banana", "apple"];
// let words = ["4", "5", "3", "4", "4", "4"];
let wordCount = words.reduce((acc, curr) => {
  // obj = {}
  // obj[key] = 1;
  // {
  //     key : 1
  // }
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(wordCount);

const res = {};
for (let i = 0; i < words.length; i++) {
  res[words[i]] = (res[words[i]] || 0) + 1;
}

console.log(res);

const randomNums = [24, 90, 12, 45];
const maxNum = randomNums.reduce((acc, curr) => {
  if (curr > acc) {
    return curr;
  }
  return acc;
}, randomNums[0]);

console.log(maxNum);

const nestedArray = [
  [1, 3, 4, 7, 8, 9, 121],
  [5, 6],
  [1, 3],
];

// flatArray = [1,2,3,5,6,1,3]

const flatArray = nestedArray.reduce((acc, currentArray) => {
  acc = [...acc, ...currentArray];
  return acc;
}, []);
console.log(flatArray);
