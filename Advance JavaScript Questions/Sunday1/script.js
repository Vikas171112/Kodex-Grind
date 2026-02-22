// Create a function that takes another function as an argument and calls it after

function delayedExecution(cb) {
  setTimeout(cb, 3000);
}

delayedExecution(function () {
  console.log("I am running after 3 seconds");
});
//I am running after 3 seconds

// Write a function that uses closures to create a counter. ✅
function createCounter() {
  let count = 1;
  return function () {
    return count++;
  };
}
const counter = createCounter();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3

//Concept:Once a function has returned something the function is pushed out of call Stack so it should not have access to the variable inside it .But in Js Closure is a phenomena which is generally seen when a function returns a functions the internal function has the acess of vsriable af its outer scope even though it is pushed out of call stack.

//Implement your own version of `.map()` as a higher-order function.

function customMap(arr, fn) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }

  return newArray;
}

console.log(customMap([10, 11, 12], (num) => num * 2));
//Concept:In Custom Map Function we are iterating over each element of array for sure and we are applying some sort of function of each element of the array we are traversing .We have not yet decided what the function does to the element .We decide the outcome of the function at the callsite

//Implement a function that limits how many times another function can be called (Closure + HOF).

function limittheNumberofExecution(fn, limit) {
  let calledtimes = 0;
  return function () {
    calledtimes++;
    if (calledtimes <= limit) {
      fn();
    }
  };
}
let abc = limittheNumberofExecution(() => {
  console.log("Some function");
}, 3);
abc(); //This is 1st time execution
abc(); //This is Second Time
abc(); //This is 3rd Time
abc(); //This will not be executed because loimt is 3
abc(); //This also will not be executed because limit is reached

//Implement a function that takes a callback and only executes it once (HOF + Closure).

function executeOnce(fn) {
  let executed = false;
  return function (...args) {
    if (!executed) {
      executed = true;
      fn(...args);
    }
  };
}
const good = executeOnce(() => {
  console.log("Executed");
});
good(); //Executed and set the boolean true
good(); //Since after exection first time the boolean was true it will never execute

// Implement a function that throttles another function (HOF + Closures).
function throttle(fn, delay) {
  let lastCallTime = 0;
  return function (...args) {
    const currentTime = new Date().getTime();
    if (currentTime - lastCallTime >= delay) {
      lastCallTime = currentTime;
      fn(...args);
    }
  };
}
const throttledFn = throttle(() => console.log("Throttled Execution"), 3000);
throttledFn();
throttledFn();
throttledFn();
//Concept:Throttle is a phenomena is javascript by which we delay the continuius execution byu stopping the execution till the delay time .That means it doesnt matter how many time the function is called butr it will run only once during that exection time
