/* 1️⃣ Greater Than Average */
function greaterThanAverage(arr) {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return arr.filter((num) => num > avg);
}

function runAverage() {
  const result = greaterThanAverage([10, 20, 30, 10]);
  document.getElementById("avgResult").innerText = result;
}

/* 2️⃣ Theme Switcher */
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";
  localStorage.setItem("theme", currentTheme);
});

/* 3️⃣ Double Click Rotation */
let rotationCount = 0;
const rotateBox = document.getElementById("rotateBox");

rotateBox.addEventListener("dblclick", () => {
  rotationCount++;
  rotateBox.style.transform = `rotate(${rotationCount * 360}deg)`;
  rotateBox.innerText = rotationCount;
});

/* 4️⃣ Custom Map */
function myMap(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

function runCustomMap() {
  const result = myMap([1, 2, 3], (num) => num * 2);
  document.getElementById("mapResult").innerText = result;
}

/* 5️⃣ Gambling */
document.getElementById("gambleBtn").addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  const msg = randomNum > 7 ? "You Win!" : "Try Again!";
  document.getElementById("gambleResult").innerText =
    `Number: ${randomNum} → ${msg}`;
});

/* 6️⃣ Hoisting */
function runHoisting() {
  var x = 10;

  function test() {
    console.log(x);
    var x = 20;
  }

  test();

  document.getElementById("hoistResult").innerText =
    "Output is undefined because var is hoisted inside function.";
}

/* 7️⃣ Character Counter */
const textArea = document.getElementById("textArea");
const charCount = document.getElementById("charCount");

textArea.addEventListener("input", () => {
  const length = textArea.value.length;
  charCount.innerText = length + " characters";

  if (length > 100) {
    charCount.classList.add("warning");
  } else {
    charCount.classList.remove("warning");
  }
});

/* 8️⃣ Product Filter */
const products = ["Apple", "Banana", "Mango", "Orange", "Avocado"];
const productList = document.getElementById("productList");

function displayProducts(arr) {
  productList.innerHTML = "";
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    productList.appendChild(li);
  });
}

displayProducts(products);

document.getElementById("productInput").addEventListener("input", (e) => {
  const value = e.target.value;
  const filtered = products.filter((p) => p.startsWith(value));
  displayProducts(filtered);
});

/* 9️⃣ Dynamic Card */
document.getElementById("addCardBtn").addEventListener("click", () => {
  const name = document.getElementById("cardName").value;
  const image = document.getElementById("cardImage").value;

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = image;

  const h3 = document.createElement("h3");
  h3.innerText = name;

  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(delBtn);

  document.getElementById("cardContainer").appendChild(card);
});

/* 🔟 Clone Object */
function cloneUser(user, newName) {
  const newObj = {};
  for (let key in user) {
    newObj[key] = user[key];
  }
  newObj.name = newName;
  return newObj;
}

function runClone() {
  const user = { name: "Vikas", age: 24 };
  const cloned = cloneUser(user, "Rahul");
  document.getElementById("cloneResult").innerText = JSON.stringify(cloned);
}
