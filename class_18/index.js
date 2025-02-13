console.log("==== Insertion Sort ====");
const arr = [12, 11, 13, 5, 6];

// arr = [11,12,13,5,6]
// arr = [5,11,12,13,6]
// arr = [5,6,11,12,13]
/*
Hi I am Adhi
He He He
*/

for (let i = 1; i < arr.length; i++) {
  const arrElement = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > arrElement) {
    const temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
    j--;
  }
  console.log(arr);
}

console.log("=== Quick Sort ====");

const unsortedArr = [60, 80, 30, 90, 50, 40, 70];
// const unsortedArr = [50, 40];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot < arr[i]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  console.log(pivot, left, right);

  const leftSortedArr = quickSort(left);
  const rightSortedArr = quickSort(right);
  const newArr = [...leftSortedArr, pivot, ...rightSortedArr];

  console.log(newArr);

  return newArr;
}

quickSort(unsortedArr);

// Topics to revise
// 1. Array
// 2. Function Recursion
// 3. Arrow function
// 4. Array methods -> splice, slice, reduce, map, filter, shift, unshift, pop, push
// 5. Nested loops (2d arrays)
// 6. if else
// 7. Do while Loop
// Question practice
