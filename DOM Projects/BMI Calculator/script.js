const nameInput = document.getElementById("name");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const unitToggle = document.getElementById("unitToggle");

const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const errorMsg = document.getElementById("errorMsg");
const resultBox = document.querySelector(".result-box");
const historyList = document.getElementById("historyList");

let isMetric = true; //initially the inputs and outputs are taken in metric units

unitToggle.addEventListener("click", () => {
  let height = parseFloat(heightInput.value); //converts float values into number
  let weight = parseFloat(weightInput.value);

  // Only convert if values exist
  if (!isNaN(height) && !isNaN(weight)) {
    if (isMetric) {
      // cm -->feet
      height = height / 30.48; // 1 ft = 30.48 cm
      weight = weight * 2.20462; // kg -->lbs
    } else {
      // feet --> cm
      height = height * 30.48;
      weight = weight / 2.20462;
    }

    heightInput.value = height.toFixed(2);
    weightInput.value = weight.toFixed(2);
  }

  // Toggle unit
  isMetric = !isMetric;

  if (isMetric) {
    heightInput.placeholder = "Enter height in cm";
    weightInput.placeholder = "Enter weight in kg";
    unitToggle.textContent = "Switch to ft/lbs";
  } else {
    heightInput.placeholder = "Enter height in feet";
    weightInput.placeholder = "Enter weight in lbs";
    unitToggle.textContent = "Switch to cm/kg";
  }
});

function calculateBmi() {
  let name = nameInput.value.trim(); //Trim out extra spacing
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  errorMsg.textContent = ""; //initially the mesage is empty

  if (!name) {
    errorMsg.textContent = "Please enter your name!";
    return;
  }

  if (!height || !weight || height <= 0 || weight <= 0) {
    errorMsg.textContent = "Please enter valid positive values!";
    return;
  }

  let heightInMeter;
  let weightInKg;

  if (isMetric) {
    heightInMeter = height / 100;
    weightInKg = weight;
  } else {
    heightInMeter = height * 0.3048;
    weightInKg = weight * 0.453592;
  }

  let bmi = weightInKg / (heightInMeter * heightInMeter);
  let finalBmi = bmi.toFixed(2);

  bmiValue.textContent = finalBmi;

  resultBox.classList.remove("underweight", "normal", "overweight", "obese");

  let category;

  if (bmi < 18.5) {
    category = "Underweight";
    resultBox.classList.add("underweight");
  } else if (bmi < 25) {
    category = "Normal";
    resultBox.classList.add("normal");
  } else if (bmi < 30) {
    category = "Overweight";
    resultBox.classList.add("overweight");
  } else {
    category = "Obese";
    resultBox.classList.add("obese");
  }

  bmiCategory.textContent = category;

  let record = {
    name,
    bmi: finalBmi,
    category,
  };
  //initialize the array history if not present in localStorage
  let history = JSON.parse(localStorage.getItem("bmiHistory")) || [];

  history.push(record);
  localStorage.setItem("bmiHistory", JSON.stringify(history));

  displayHistory();
}

calculateBtn.addEventListener("click", calculateBmi);

resetBtn.addEventListener("click", () => {
  nameInput.value = "";
  heightInput.value = "";
  weightInput.value = "";
  bmiValue.textContent = "--";
  bmiCategory.textContent = "Category will appear here";
  errorMsg.textContent = "";
  resultBox.classList.remove("underweight", "normal", "overweight", "obese");
});

function displayHistory() {
  historyList.innerHTML = "";

  let history = JSON.parse(localStorage.getItem("bmiHistory")) || [];

  history.forEach((item, index) => {
    let li = document.createElement("li");

    let textSpan = document.createElement("span");
    textSpan.textContent = `${item.name} - BMI: ${item.bmi} (${item.category})`;

    let dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";
    dltBtn.classList.add("delete-btn");

    //  Delete functionality
    dltBtn.addEventListener("click", () => {
      history.splice(index, 1); // remove selected item splice removes 1 element at tthat index
      localStorage.setItem("bmiHistory", JSON.stringify(history));
      displayHistory(); // refresh UI
    });

    li.appendChild(textSpan);
    li.appendChild(dltBtn);

    historyList.appendChild(li);
  });
}
window.addEventListener("DOMContentLoaded", displayHistory);
