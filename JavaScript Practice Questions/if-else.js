/****************************
  If–Else Conditionals (31–40)
****************************/

/* 31. Store a number and check positive or negative */
let numberCheck = -10;

if (numberCheck >= 0) {
  console.log("31) Positive");
} else {
  console.log("31) Negative");
}
// Output: 31) Negative

/* 32. Print Adult if age ≥18 else Minor */
let age = 16;

if (age >= 18) {
  console.log("32) Adult");
} else {
  console.log("32) Minor");
}
// Output: 32) Minor

/* 33. Check even or odd */
let evenOddNumber = 7;

if (evenOddNumber % 2 === 0) {
  console.log("33) Even");
} else {
  console.log("33) Odd");
}
// Output: 33) Odd

/* 34. Find greater between two numbers */
let firstValue = 20;
let secondValue = 35;

if (firstValue > secondValue) {
  console.log("34) Greater:", firstValue);
} else if (secondValue > firstValue) {
  console.log("34) Greater:", secondValue);
} else {
  console.log("34) Both are equal");
}
// Output: 34) Greater: 35

/* 35. Score grading:
   ≥90 Excellent
   ≥70 Good
   Else Needs Improvement
*/
let score = 72;

if (score >= 90) {
  console.log("35) Excellent");
} else if (score >= 70) {
  console.log("35) Good");
} else {
  console.log("35) Needs Improvement");
}
// Output: 35) Good

/* 36. Check leap year */
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("36) Leap Year");
} else {
  console.log("36) Not a Leap Year");
}
// Output: 36) Leap Year

/* 37. Check vowel or consonant */
let character = "a";

if (
  character === "a" ||
  character === "e" ||
  character === "i" ||
  character === "o" ||
  character === "u" ||
  character === "A" ||
  character === "E" ||
  character === "I" ||
  character === "O" ||
  character === "U"
) {
  console.log("37) Vowel");
} else {
  console.log("37) Consonant");
}
// Output: 37) Vowel

/* 38. Find largest of three numbers */
let firstNumber = 10;
let secondNumber = 50;
let thirdNumber = 30;

if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
  console.log("38) Largest:", firstNumber);
} else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
  console.log("38) Largest:", secondNumber);
} else {
  console.log("38) Largest:", thirdNumber);
}
// Output: 38) Largest: 50

/* 39. Password validation (admin123) */
let password = "admin123";

if (password === "admin123") {
  console.log("39) Login Successful");
} else {
  console.log("39) Wrong Password");
}
// Output: 39) Login Successful

/* 40. Check divisibility by 3 and 5 */
let checkNumber = 30;

if (checkNumber % 3 === 0 && checkNumber % 5 === 0) {
  console.log("40) Divisible by both 3 and 5");
} else {
  console.log("40) Not divisible by both 3 and 5");
}
// Output: 40) Divisible by both 3 and 5
