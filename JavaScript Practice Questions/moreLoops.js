/****************************
   While Loop Practice (41–48)
****************************/

/* 41. Sum from 1 to 100 */
let totalSum = 0;
let number = 1;

while (number <= 100) {
  totalSum += number;
  number++;
}

console.log("41) Sum from 1 to 100:", totalSum);
// Output: 41) Sum from 1 to 100: 5050

/* 42. Print table of 5 */
console.log("42) Table of 5:");

let tableValue = 5;
let multiplier = 1;

while (multiplier <= 10) {
  console.log(
    tableValue + " x " + multiplier + " = " + tableValue * multiplier,
  );
  multiplier++;
}

// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

/* 43. Count even numbers between 1–50 */
let evenCount = 0;
let currentValue = 1;

while (currentValue <= 50) {
  if (currentValue % 2 === 0) {
    evenCount++;
  }
  currentValue++;
}

console.log("43) Even numbers count (1–50):", evenCount);
// Output: 43) Even numbers count (1–50): 25

/* 44. Print 10 to 1 */
console.log("44) Numbers from 10 to 1:");

let reverseCount = 10;

while (reverseCount >= 1) {
  console.log(reverseCount);
  reverseCount--;
}

// Output:
// 10
// 9
// ...
// 1

/* 45. Sum of even numbers from 1–20 */
let evenSum = 0;
let checkNumber = 1;

while (checkNumber <= 20) {
  if (checkNumber % 2 === 0) {
    evenSum += checkNumber;
  }
  checkNumber++;
}

console.log("45) Sum of even numbers (1–20):", evenSum);
// Output: 45) Sum of even numbers (1–20): 110

/* 46. Print squares from 1–10 */
console.log("46) Squares from 1 to 10:");

let squareValue = 1;

while (squareValue <= 10) {
  console.log("Square of", squareValue, "=", squareValue * squareValue);
  squareValue++;
}

// Output:
// Square of 1 = 1
// Square of 2 = 4
// ...
// Square of 10 = 100

/* 47. Count characters in "JavaScript" */
let word = "JavaScript";
let characterCount = 0;
let index = 0;

while (index < word.length) {
  characterCount++;
  index++;
}

console.log('47) Character count in "JavaScript":', characterCount);
// Output: 47) Character count in "JavaScript": 10

/* 48. Find largest in [3,7,2,9,5] */
let numbersArray = [3, 7, 2, 9, 5];
let largestNumber = numbersArray[0];
let position = 1;

while (position < numbersArray.length) {
  if (numbersArray[position] > largestNumber) {
    largestNumber = numbersArray[position];
  }
  position++;
}

console.log("48) Largest number:", largestNumber);
// Output: 48) Largest number: 9
