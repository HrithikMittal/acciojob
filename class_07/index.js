console.log("Hello Class 07");

// Primitive Data Types
//  The types that are used to store basic data.

let name = "Adhikansh Mittal";
console.log(typeof name);

let age = 24;
console.log(typeof age);

let height = 6.0;
console.log(typeof height);

let isMarried = false;
console.log(typeof isMarried);

let college;
console.log(typeof college);
college = "VIT";
console.log(typeof college);

let ranking = 9989121673612976371263726121212n;
console.log(typeof ranking);

let kids = null;
kids = 12;
console.log(typeof kids);

// Non Primitive Data Types
// Array
let placesVisited = [
  "Jaipur",
  2021,
  "Delhi",
  2017,
  "Dubai",
  2022,
  "Istanbul",
  2024,
];
console.log(typeof placesVisited);
console.log("==Start of Array==");
console.log(placesVisited[0], placesVisited[1]);
console.log(Array.isArray(placesVisited));

console.log("==End of Array==");

// Object
let info = {
  name: "Adhikansh Mittal",
  age: 24,
  0: "Adhikansh",
  1: "Mittal",
  places: ["Jaipur", 2021, "Delhi", 2017, "Dubai", 2022, "Istanbul", 2024],
  "first City": "Bengal",
  null: 123,
};

console.log(Array.isArray(info.places));
console.log(Array.isArray(info["places"]));

// console.log(info["places"][0]);
// console.log(info.age);
// console.log(info["first City"]);
// console.log(info.first City)
// console.log(info.undefined);
// console.log(info[0]);

// console.log(typeof info);

// Comparison Operator

const x = 12;
const y = "12";
console.log(typeof x, typeof y);
// == vs ===
console.log("THIS IS Separator");
console.log(2 == 2);
console.log(2 === "2");

const places1 = ["Berlin", "Dubai", "Barcelona", "Kashmir"];
const places2 = ["Berlin", "Dubai", "Barcelona", "Kashmir"];
const places3 = places1;

console.log(places1 == places2);
console.log(places1 === places2);
console.log(places1 === places3);
console.log("Before: This is place 3", places3);
console.log("Before: This is place 1", places1);

places3[0] = "Adhikansh";

console.log("After: This is place 3", places3);
console.log("After: This is place 1", places1);
