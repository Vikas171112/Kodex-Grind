let diceBtn = document.getElementById("diceBtn");
let diceContainer = document.getElementById("diceContainer");
let diceResult = document.getElementById("diceResult");
let cardBtn = document.getElementById("cardBtn");
let cardContainer = document.getElementById("cardContainer");
let clearBtn = document.getElementById("clearBtn");
let lotteryInput = document.getElementById("lotteryInput");
let lotteryBtn = document.getElementById("lotteryBtn");
let lotteryResult = document.getElementById("lotteryResult");
let galleryBtn = document.getElementById("galleryBtn");
let galleryContainer = document.getElementById("galleryContainer");
console.log(lotteryBtn);

diceBtn.addEventListener("click", () => {
  diceContainer.innerText = "";

  let diceOne = Math.floor(Math.random() * 6);
  let diceTwo = Math.floor(Math.random() * 6);

  let diceBoxOne = document.createElement("div");
  diceBoxOne.className = "dice";
  diceBoxOne.innerText = diceOne;

  let diceBoxTwo = document.createElement("div");
  diceBoxTwo.className = "dice";
  diceBoxTwo.innerText = diceTwo;

  diceContainer.append(diceBoxOne, diceBoxTwo);

  if (diceOne > diceTwo) {
    diceResult.innerText = "Winner: Dice 1 ";
  } else if (diceTwo > diceOne) {
    diceResult.innerText = "Winner: Dice 2 ";
  } else {
    diceResult.innerText = "It's a Draw ";
  }
});

let cardId = 1;
console.log(cardId);
cardBtn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  console.log("red", red);
  console.log("Green", red);
  console.log("Blue", red);
  let width = Math.floor(Math.random() * 150) + 80;
  let height = Math.floor(Math.random() * 150) + 80;

  let card = document.createElement("div");
  card.className = "card";

  card.style.width = width + "px";
  card.style.height = height + "px";
  card.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  card.setAttribute("data-id", cardId);

  cardId++;
  console.log(cardId);
  cardContainer.appendChild(card);
  if (cardId >= 1) {
    clearBtn.addEventListener("click", () => {
      cardContainer.removeChild(card);
    });
  }
});

lotteryBtn.addEventListener("click", () => {
  let userValue = Number(lotteryInput.value);
  console.log(userValue);
  let lotteryValue = Math.ceil(Math.random() * 50);
  console.log(lotteryResult);
  setTimeout(() => {
    if (userValue === lotteryValue) {
      lotteryResult.innerText = `You have Won`;
    } else if (userValue != lotteryValue) {
      lotteryResult.innerText = `uffff! the number was ${lotteryValue}`;
    } else {
      lotteryResult.innerText = "Processing";
    }
    lotteryInput.value = null;
  }, 1000);
});
const imageArray = [
  "https://picsum.photos/300/200?random=1",
  "https://picsum.photos/300/200?random=2",
  "https://picsum.photos/300/200?random=3",
  "https://picsum.photos/300/200?random=4",
  "https://picsum.photos/300/200?random=5",
];

galleryBtn.addEventListener("click", () => {
  const imageIndex = Math.floor(Math.random() * 5);
  let image = document.createElement("img");
  image.className = "galleryImage";
  image.setAttribute("src", imageArray[imageIndex]);
  galleryContainer.appendChild(image);
  console.log("Image src:", image.getAttribute("src"));
});

let progressBtn = document.getElementById("progressBtn");
let progressBar = document.getElementById("progressBar");
let progressText = document.getElementById("progressText");

let progress = 0;

progressBtn.addEventListener("click", () => {
  let increase = Math.floor(Math.random() * 21) + 10; // 10 to 30

  progress += increase;

  if (progress > 100) {
    progress = 100;
  }

  progressBar.style.width = progress + "%";
  progressText.innerText = progress + "%";

  if (progress === 100) {
    progressBtn.disabled = true;
    progressText.innerText = "100% Completed 🎉";
  }
});

/****************************
  Task 6: Random Box Remover
*****************************/
let boxBtn = document.getElementById("boxBtn");
let boxContainer = document.getElementById("boxContainer");

boxBtn.addEventListener("click", () => {
  boxContainer.innerHTML = "";

  for (let count = 1; count <= 5; count++) {
    let box = document.createElement("div");
    box.className = "removable-box";
    box.innerText = count;

    box.setAttribute("data-id", count);

    box.addEventListener("click", () => {
      console.log("Removed box id:", box.getAttribute("data-id"));
      box.remove();
    });

    boxContainer.appendChild(box);
  }
});

/****************************
  Task 7: Mini Gambling UI
*****************************/
let gambleBtn = document.getElementById("gambleBtn");
let gambleNumbers = document.getElementById("gambleNumbers");
let gambleResult = document.getElementById("gambleResult");

gambleBtn.addEventListener("click", () => {
  gambleNumbers.innerHTML = "";

  let first = Math.floor(Math.random() * 9) + 1;
  let second = Math.floor(Math.random() * 9) + 1;
  let third = Math.floor(Math.random() * 9) + 1;

  let boxOne = document.createElement("div");
  boxOne.className = "gamble-num";
  boxOne.innerText = first;

  let boxTwo = document.createElement("div");
  boxTwo.className = "gamble-num";
  boxTwo.innerText = second;

  let boxThree = document.createElement("div");
  boxThree.className = "gamble-num";
  boxThree.innerText = third;

  gambleNumbers.append(boxOne, boxTwo, boxThree);

  if (first === second && second === third) {
    gambleResult.innerText = "Jackpot 🎉🎉🎉";
  } else {
    gambleResult.innerText = "Try Again 😄";
  }
});
