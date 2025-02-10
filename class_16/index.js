// Merge Sorted Arrays:

// Problem: Write a function mergeSortedArrays(arr1, arr2) that takes two sorted arrays arr1 and arr2 as
// input and returns a new sorted array containing all the elements from both input arrays. The solution
// should be efficient (don't just concatenate and sort).
// Example:
// mergeSortedArrays([1, 3, 5], [2, 4, 6]) should return [1, 2, 3, 4, 5, 6].

console.log("---- Selection Sort ----");
const arr = [4, 1, 6, 3, 8];
// smallIndex = 1;

// const c = arr[0];
// arr[0] = arr[smallIndex];
// arr[smallIndex] =c

// arr = [1,3,4,6,8]

// let smallIndex = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[smallIndex] > arr[i]) {
//     smallIndex = i;
//   }
// }

// let c = arr[0];
// arr[0] = arr[smallIndex];
// arr[smallIndex] = c;
// // arr = [1,4,6,3,8]
// console.log(arr);

// smallIndex = 1;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[smallIndex] > arr[i]) {
//     smallIndex = i;
//   }
// }

// c = arr[1];
// arr[1] = arr[smallIndex];
// arr[smallIndex] = c;
// // arr = [1,3,6,4,8]
// console.log(arr);

let smallIndex;
let c;
for (let i = 0; i < arr.length; i++) {
  smallIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[smallIndex] > arr[j]) {
      smallIndex = j;
    }
  }
  c = arr[i];
  arr[i] = arr[smallIndex];
  arr[smallIndex] = c;
  console.log(arr);
}

// let a = -10;
// let b = -60;
// console.log(a, b);
// console.log("SWAPPING 1st Solution");
// let c = a;
// a = b;
// b = c;
// console.log(a, b);

// console.log("SWAPPING 2nd Solution");
// [b, a] = [a, b];
// console.log(a, b);

// console.log("SWAPPING 3rd Solution");
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

console.log(" ==== Bubble Sort ==== ");
const unsorted_arr = [2, 36, 37, 10, 38, 39, 7, 35, 48, 22];

let count = 0;
// for (let j = 0; j < unsorted_arr.length; j++) {
for (let i = 0; i < unsorted_arr.length - 1; i++) {
  if (unsorted_arr[i] > unsorted_arr[i + 1]) {
    [unsorted_arr[i + 1], unsorted_arr[i]] = [
      unsorted_arr[i],
      unsorted_arr[i + 1],
    ];
  }
  count = count + 1;
}
console.log(unsorted_arr);
// }

console.log("count", count);
