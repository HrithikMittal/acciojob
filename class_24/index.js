// Longest Increasing Subsequence (LIS)
// const arr = [3, 10, 2, 1, 30];
// 3
// const arr = [30,20,10]
// 1
// const arr = [2,2,2]
// 1
// const arr = [10,20,35,80]
// 4
// const arr = [30,1,2,3,50]
// 4
// const arr = [30,50,1,2,3,50]
// 4
// const arr = [30,1,50,2,3,50]
// 4
// const arr = [30,1,2,50,60,3,4,50]
// 5

// const arr = [3, 10, 2, 1, 30];
// const len = [1, 1, 1, 1, 1];
// // compare 10
// const len = [1, 2, 1, 1, 1];
// // compare 2
// const len = [1, 2, 1, 1, 1];
// const len = [1, 2, 1, 1, 1];
// // compare 1
// const len = [1, 2, 1, 1, 1];
// const len = [1, 2, 1, 1, 1];
// const len = [1, 2, 1, 1, 1];
// // compare 30
// const len = [1, 2, 1, 1, 1];

const getLongestIncreasingSubsequence = (arr) => {
  //   const len = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     len.push(1);
  //   }
  //   console.log(len);

  const len = new Array(arr.length).fill(1);
  console.log(len);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        len[i] = Math.max(len[i], len[j] + 1);
      }
    }
  }
  console.log(len);
  return Math.max(...len);
};

const arr = [30, 1, 2, 50, 60, 3, 4, 50];
console.log(getLongestIncreasingSubsequence(arr));

// Edit Distance
// const s1 = "geek"
// const s2 = "gesek"
// 1

// const s1 = "cat"
// const s2 = "cut"
// 1

// const s1 = "sunday"
// const s2 = "saturday"
// 3

// nums = [2,7,11,15]
// target = 9
// output = [0,1]

const nums = [3, 34, 4, 12, 5, 2];
target = 9;

//   0  3  34  4  12  5  2
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// Add 3

//      0 1 2 3 4 5 6 7 8 9
// 0    T F F F F F F F F F
// 1(3) T F F T F F F F F F
// 2(34)T F F T F F F F F F
// 3(4) T F F T T F F T F F
// 4(12)T F F T T F F T F F
// 5(5) T F F T T T F T T T
// 6(2) T F T T T T T T T T

// 3. Next Greater Element (Stack)
// Problem:
// Given an array, return an array where each element is replaced by the next
// greater element to its right. If none, return -1.
const arr1 = [4, 5, 2, 10, 8];
const output = [5, 10, 10, -1, -1];
