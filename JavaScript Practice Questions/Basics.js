/* 1. Store full name & hobby and print:
   "My name is ___ and my hobby is ___"
*/
var myName = "Vikas Kumar Jha";
var favHobby = "Singing";

console.log("1) My name is", myName, "and my hobby is", favHobby);
// Output: My name is Vikas Kumar Jha and my hobby is Singing

/* 2. Perform calculation: 45 * 2 - 10 */
var num1 = 45;
var num2 = 2;
var num3 = 10;

var calculationResult = num1 * num2 - num3;
console.log("2) The result of arithmetic calculation is:", calculationResult);
// Output: 80

/* 3. Print current year using Date object */
var currentDate = new Date();
console.log("3) Current Year:", currentDate.getFullYear());
// Output: 2026 (depends on current year)

/* 4. Store first and last name separately and print full name */
var firstName = "Vikas";
var lastName = "Jha";

var fullName = firstName + " " + lastName;
console.log("4) Full Name:", fullName);
// Output: Vikas Jha

/* 5. Create a variable, print it, update it, and print again */
var value = 10;
console.log("5) Before Update:", value);

value = 20;
console.log("5) After Update:", value);
// Output:
// Before Update: 10
// After Update: 20

/* 6. Print a custom error message using console.error() */
const errorMessage = "Invalid input provided";
console.error("6) Error:", errorMessage, "Check your data.");
// Output (in red): Error: Invalid input provided Check your data.

/* 7. Store a number and print its square */
var number = 5;

console.log("7) Square using multiplication:", number * number);
console.log("7) Square using Math.pow:", Math.pow(number, 2));
console.log("7) Square using ** operator:", number ** 2);
// Output:
// 25
// 25
// 25

/* 8. Create a boolean variable and print it */
let isActive = true;
console.log("8) Boolean value:", isActive);
// Output: true

/* 9. Store age and print whether it is greater than 18 */
var myAge = 25;

if (myAge >= 18) {
  console.log("9) My age is greater than 18");
} else {
  console.log("9) My age is smaller than 18");
}
// Output: My age is greater than 18

/* 10. Divide 100 by 0 and print result */
console.log("10) 100 / 0 =", 100 / 0);
console.log("10) 0 / 100 =", 0 / 100);
// Output:
// Infinity
// 0

/************************
  Variables & Data Types
************************/

/* 11. Create a variable using let and print it */
let greeting = "Hello";
console.log("11) Greeting:", greeting);
// Output: Hello

/* 12. Declare constant PI and print it */
const PI = 3.14;
console.log("12) PI:", PI);
// Output: 3.14

/* 13. Create a variable, update it, and print again */
let marks = 25;
marks = 30;

console.log("13) Updated value:", marks);
// Output: 30

/* 14. Print typeof null */
console.log("14) typeof null =", typeof null);
// Output: object

/* 15. Store "25" in a variable and print its type */
var stringNumber = "25";
console.log("15) typeof '25' =", typeof stringNumber);
// Output: string

/* 16. Create a boolean and print its type */
let isRaining = false;
console.log("16) typeof isRaining =", typeof isRaining);
// Output: boolean

/* 17. Create a string, number, and boolean. Print all together */
let personName = "Vikas";
let personAge = 25;
let isVoter = true;

console.log(
  "17)",
  personName,
  "is",
  personAge,
  "years old and voter =",
  isVoter,
);
// Output: Vikas is 25 years old and voter = true

/* 18. Declare a variable without value and print its type */
let noValue;
console.log("18) typeof noValue =", typeof noValue);
// Output: undefined

/* 19. Create a variable with undefined and print its type */
let undefinedValue = undefined;
console.log("19) typeof undefinedValue =", typeof undefinedValue);
// Output: undefined

/* 20. Create an array using const
   - Print it
   - Push a new value and print updated array
*/
const numbersArray = [10, 20, 30, 40];
console.log("20) Original Array:", numbersArray);

numbersArray.push(70);
console.log("20) push(80) returns:", numbersArray.push(80)); // returns new length
console.log("20) Updated Array:", numbersArray);

// Output:
// Original Array: [10, 20, 30, 40]
// push(80) returns: 6
// Updated Array: [10, 20, 30, 40, 70, 80]
