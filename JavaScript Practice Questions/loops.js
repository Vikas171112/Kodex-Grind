/***********************
        LOOPS
   (Questions 21–30)
************************/

/* 21. Print numbers from 1 to 50 using for */
console.log("21) Numbers from 1 to 50:");

for (let count = 1; count <= 50; count++) {
  console.log(count);
}
// Output: 1 to 50 (each on new line)

/* 22. Using while, calculate sum from 1 to 10 */
let totalSum = 0;
let currentNumber = 1;

while (currentNumber <= 10) {
  totalSum = totalSum + currentNumber;
  currentNumber++;
}

console.log("22) The sum of numbers from 1 to 10 is", totalSum);
// Output: 22) The sum of numbers from 1 to 10 is 55

/* 23. Use for...of to print each character of "JavaScript" */
console.log('23) Characters of "JavaScript":');

const word = "JavaScript";

for (let letter of word) {
  console.log(letter);
}
// Output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t

/* 24. Print odd numbers from 1–20 using continue */
console.log("24) Odd numbers from 1 to 20:");

let number = 1;

while (number <= 20) {
  if (number % 2 === 0) {
    number++; // increment before continue
    continue;
  }

  console.log(number);
  number++;
}
// Output: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

/* 25. Use do...while to print 5 to 1 */
console.log("25) Print 5 to 1:");

let reverseCount = 5;

do {
  console.log(reverseCount);
  reverseCount--;
} while (reverseCount >= 1);

// Output:
// 5
// 4
// 3
// 2
// 1

/* 26. Calculate factorial of 5 */
let factorialNumber = 5;
let factorialResult = 1;

while (factorialNumber >= 1) {
  factorialResult = factorialResult * factorialNumber;
  factorialNumber--;
}

console.log("26) Factorial of 5 is", factorialResult);
// Output: 26) Factorial of 5 is 120

/* 29. Print numbers from 1–100 divisible by 5 using while */
console.log("29) Numbers divisible by 5 from 1 to 100:");

let divisibleNumber = 5;
let limit = 100;

while (divisibleNumber <= limit) {
  console.log(divisibleNumber);
  divisibleNumber += 5;
}

// Output: 5, 10, 15, ... 100

/* 30. Create object {name, age} and print keys using for...in */
console.log("30) Object keys and values:");

const person = { name: "Prashant", age: 30 };

for (let key in person) {
  console.log(key, ":", person[key]);
}

// Output:
// name : Alice
// age : 30
