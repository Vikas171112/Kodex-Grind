// 1. Write a function that uses `forEach()` to calculate the total sum of an array.
function sumOfArray(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

let result = sumOfArray([2, 3, 4, 5]);
console.log(result); //14

// 2. Write a function that uses `map()` to return a new array where each number is squared.
function arrayOfSquare(arr) {
  const newArray = arr.map((element) => element * element);
  return newArray;
}

let result1 = arrayOfSquare([2, 3, 4, 5]);
console.log(result1); //[ 4, 9, 16, 25 ]

// 3. Write a function that uses `filter()` to return only numbers greater than 50.
function filterNumbers(arr) {
  const filteredArray = arr.filter((element) => element > 50);
  return filteredArray;
}

const resultArray = filterNumbers([20, 30, 40, 50, 60, 70, 80]);
console.log(resultArray); //[ 60, 70, 80 ]

// 4. Write a function that checks whether two values are strictly equal using `===`.

function valueChecker(value1, value2) {
  if (value1 === value2) {
    console.log("Two values are strictly equal (same value + same type)");
  } else if (value1 == value2) {
    console.log("Values are equal but types are different");
  } else {
    console.log("Values are not equal");
  }
}
valueChecker(5, "5"); // Values are equal but types are different
valueChecker(5, 5); // strictly equal
valueChecker(5, "6"); // not equal

// 5. Write a function that demonstrates array mutability by modifying the original array using `push()`.

function arrayMutation(arr, element) {
  arr.push(element);
  return arr;
}
console.log(arrayMutation([7, 8, 9], 10)); //Initailly the array is [7,8,9] but after pushimng 10 into it it modifies the same array

// 6. Write a function that removes the last element immutably (without modifying original array).
function removeLastElement(arr) {
  return arr.slice(0, -1);
}
console.log(removeLastElement([1, 2, 3, 4])); //[ 1, 2, 3 ] return new array having deleted the last element of the original array

// 7. Write a function that sorts numbers in ascending order using a proper compare function.
function sortedNewArray(arr) {
  return [...arr].sort((a, b) => a - b);
}
console.log(sortedNewArray([5, 8, 6, 10]));

// 8. Write a function that sorts strings alphabetically.
function SortString(str) {
  return str
    .split("")
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join("");
}

console.log(SortString("Vikas"));

// 9. Write a function that reverses an array without using `reverse()`.
function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}
console.log(reverseArray([1, 2, 5, 4, 3]));

// 10. Write a function that merges two arrays using `concat()` and returns the result.

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

let a = [1, 2, 3];
let b = [4, 5];

console.log(mergeArrays(a, b));
// [1, 2, 3, 4, 5]

// 12. Write a function that manually checks whether a value exists in an array (without using `includes()`).

function valueExists(arr, value) {
  for (let item of arr) {
    if (item === value) {
      console.log("Value Exist in Array");
      return true;
    }
  }
  console.log("Number not Found in the Array");
  return false;
}
let nums = [10, 20, 30];

console.log(valueExists(nums, 30)); // true
console.log(valueExists(nums, 99)); // false

// 13. Write a function that uses `includes()` to check if an array contains a specific value.

function checkValue(arr, value) {
  return arr.includes(value);
}

console.log(checkValue(nums, 30)); //true
console.log(checkValue(nums, 99)); //false

// 14. Write a function that filters strings starting with "A" using `startsWith()`.
function filterStartingWithA(arr) {
  return arr.filter((word) => word.startsWith("A"));
}
let names = ["Apple", "Banana", "Ant", "Cat", "Aman"];

console.log(filterStartingWithA(names)); //[ 'Apple', 'Ant', 'Aman' ]

function firstNumberGratethanhundred(arr) {
  return arr.find((element) => element > 100);
}
console.log(firstNumberGratethanhundred([90, 100, 120, 140, 10])); //120
console.log(firstNumberGratethanhundred([9, 10, 12, 14, 10])); //undefined

// 16. Create an object and write a function that returns all its keys using a loop.
let student = {
  name: "Vikas Kumar",
  age: 26,
  city: "Banglore",
};
function printKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}
printKeys(student);
// name
// age
// city

// 17. Write a function that adds a new property to an object immutably.
function addnewProperty(obj, property, value) {
  return { ...obj, [property]: value };
}

console.log(addnewProperty(student, "degree", "MCA")); //{ name: 'Vikas Kumar', age: 26, city: 'Banglore', degree: 'MCA' }

// 18. Write a function that updates a property in an object.

function updateProperty(obj, key, newValue) {
  obj[key] = newValue;
  return obj;
}
console.log(updateProperty(student, "age", 25));
console.log(student);
//{ name: 'Vikas Kumar', age: 25, city: 'Banglore' }
// { name: 'Vikas Kumar', age: 25, city: 'Banglore' } same object is updated

// 19. Write a function that checks whether a specific key exists inside an object.
function checkForKey(obj, keyName) {
  for (let key in obj) {
    if (key === keyName) {
      return true;
    }
  }
  return false;
}

console.log(checkForKey(student, "age"));

// 20. Write a function that converts an object into an array of key-value pairs.
function objectToPairs(obj) {
  let pairs = [];

  for (let key in obj) {
    pairs.push([key, obj[key]]);
  }

  return pairs;
}
//or we can directly return obj.entries it will do the job for us
console.log(objectToPairs(student));
//[ [ 'name', 'Vikas Kumar' ], [ 'age', 25 ], [ 'city', 'Banglore' ] ]
