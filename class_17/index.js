const arr = [5, 4, 6, 2, 1, 3];

let minIndex;
for (let i = 0; i < arr.length; i++) {
  minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  const temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
  //   [1,4,6,2,5,3]
  //   [1,2,6,4,5,3]
  //   [1,2,3,4,5,6]
  //   [1,2,3,4,5,6]
  //   [1,2,3,4,5,6]
  //   [1,2,3,4,5,6]
}

// unsortedArr -> camel casing
// unsorted_arr -> snake casing
// unsorted-arr -> kebab casing
// UnsortedArr -> pascal casing

const unsortedArr = [38, 27, 43, 3, 9, 82, 10];
// [38,27,43,3]     [9,82,10]
// [38,27]  [43,3]   [9,82] [10]
// [38] [27] [43] [3]   [9] [82]
// [27,38] [3,43]  [9,82] [10]
//  [3,27,38,43]    [9,10,82]
//  [3,9,10,27,38,43,82]

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i = i + 1;
    } else {
      result.push(right[j]);
      j = j + 1;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i = i + 1;
  }

  while (j < right.length) {
    result.push(right[j]);
    j = j + 1;
  }
  return result;
}

const breakFromMid = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const arrLength = arr.length;
  const arrMid = Math.ceil(arrLength / 2);

  const arrLeft = arr.slice(0, arrMid);
  const arrRight = arr.slice(arrMid);
  console.log("arrMid", arrMid, arrLeft, arrRight);

  const breakLeft = breakFromMid(arrLeft);
  const breakRight = breakFromMid(arrRight);
  const merger = merge(breakLeft, breakRight);
  console.log(breakLeft, breakRight, " ==> ", merger);
  return merger;
};

const res = breakFromMid(unsortedArr);
console.log(res);
// const sortedArr1 = [3, 27, 38, 43];
// const sortedArr2 = [9, 10, 82];

// let iterationCount = 0;
// const sortedMergeArr = [];
// let j = 0;
// for (let i = 0; i < sortedArr1.length; ) {
//   if (sortedArr1[i] < sortedArr2[j]) {
//     sortedMergeArr.push(sortedArr1[i]);
//     i++;
//   } else {
//     sortedMergeArr.push(sortedArr2[j]);
//     j++;
//   }

//   iterationCount = iterationCount + 1;
// }

// console.log("Before", iterationCount);

// for (; j < sortedArr2.length; j++) {
//   sortedMergeArr.push(sortedArr2[j]);
//   iterationCount = iterationCount + 1;
// }

// console.log(sortedMergeArr, iterationCount);

// let count = 0;
// for (let i = 0; i < sortedArr1.length; i++) {
//   for (let j = 0; j < sortedArr2.length; j++) {
//     count = count + 1;
//   }
// }
// 1 -> 3
// 2 -> 3
// 3 -> 3
// 4 -> 3

// console.log("c", count);
const sortedArr1 = [3, 27, 38, 43, 83];
const sortedArr2 = [9, 10, 82];
const sortedMergeArr = [];

let i = 0,
  j = 0;
while (i < sortedArr1.length && j < sortedArr2.length) {
  if (sortedArr1[i] < sortedArr2[j]) {
    sortedMergeArr.push(sortedArr1[i]);
    i++;
  } else {
    sortedMergeArr.push(sortedArr2[j]);
    j++;
  }
}

while (i < sortedArr1.length) {
  sortedMergeArr.push(sortedArr1[i]);
  i++;
}
while (j < sortedArr2.length) {
  sortedMergeArr.push(sortedArr2[j]);
  j++;
}

// console.log(sortedMergeArr);
