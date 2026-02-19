let task1Text = document.getElementById("task1Text");
let task1Button = document.getElementById("task1Btn");
let task2Box = document.getElementById("task2Box");
let task2btn = document.getElementById("task2Btn");
let task3Btn = document.getElementById("task3Btn");
let task3Box = document.getElementById("task3Box");
let task4Box = document.getElementById("task4Box");
let task4Left = document.getElementById("task4Left");
let task4Right = document.getElementById("task4Right");
let task5Number = document.getElementById("task5Number");
let task5Minus = document.getElementById("task5Minus");
let task5Plus = document.getElementById("task5Plus");
let task6Btn = document.getElementById("task6Btn");
let task7Input = document.getElementById("task7Input");
let task7Output = document.getElementById("task7Output");
let task8Box = document.getElementById("task8Box");
let task9Btn = document.getElementById("task9Btn");
let task9Text = document.getElementById("task9Text");
let redLight = document.getElementById("redLight");
let yellowLight = document.getElementById("yellowLight");
let greenLight = document.getElementById("greenLight");

let stopBtn = document.getElementById("stopBtn");
let readyBtn = document.getElementById("readyBtn");
let goBtn = document.getElementById("goBtn");

console.log(task3Box);

// Task1
task1Button.addEventListener("click", () => {
  if (task1Text.innerHTML === "Hello") {
    task1Text.innerHTML = "Welcome";
  } else if (task1Text.innerHTML === "Welcome") {
    task1Text.innerHTML = "Hello";
  }
});

//Task2
const colors = ["Red", "Green", "blue"];

let colorIndex = 0;
task2btn.addEventListener("click", () => {
  task2Box.style.backgroundColor = colors[colorIndex];
  colorIndex++;
  if (colorIndex > colors.length - 1) {
    colorIndex = 0;
  }
});

//Task3

task3Btn.addEventListener("click", () => {
  if (task3Box.style.visibility == "hidden") {
    task3Box.style.visibility = "visible";
    task3Btn.innerText = "Hide Box";
  } else {
    task3Box.style.visibility = "hidden";
    task3Btn.innerText = "Show Box";
  }
});

//Task4

let angle = 0;
function rotateRight() {
  task4Box.style.transform = `rotate(${angle}deg)`;
}
function rotateLeft() {
  task4Box.style.transform = `rotate(${angle}deg)`;
}
task4Left.addEventListener("click", () => {
  rotateLeft();
  angle -= 45;
});
task4Right.addEventListener("click", () => {
  rotateRight();
  angle += 45;
});

//Task 5

let count = 0;
task5Plus.addEventListener("click", () => {
  count++;
  task5Number.innerText = count;
});
task5Minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    task5Number.innerText = count;
  }
});

//Task 6
task6Btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//Task 7
task7Input.addEventListener("input", () => {
  task7Output.innerText = task7Input.value;
});

//Task8

task8Box.addEventListener("mouseenter", () => {
  task8Box.style.backgroundColor = "orange";
});

task8Box.addEventListener("mouseleave", () => {
  task8Box.style.backgroundColor = "#ddd";
});

//Task 9
task9Btn.addEventListener("click", () => {
  console.log("Clicked once");
  task9Text.innerText = "Waiting......";
  task9Btn.disabled = true;
  if (task9Btn.disabled === true) {
    task9Btn.innerText = "Waiting....";
    task9Btn.style.backgroundColor = "darkblue";
  }
});

function resetLights() {
  redLight.style.opacity = "0.3";
  yellowLight.style.opacity = "0.3";
  greenLight.style.opacity = "0.3";
}

stopBtn.addEventListener("click", () => {
  resetLights();
  redLight.style.opacity = "1";
});

readyBtn.addEventListener("click", () => {
  resetLights();
  yellowLight.style.opacity = "1";
});

goBtn.addEventListener("click", () => {
  resetLights();
  greenLight.style.opacity = "1";
});
