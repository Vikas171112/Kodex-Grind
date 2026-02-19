function selector(id) {
  return document.getElementById(id);
}

let secondHand = selector("secHand");
let minHand = selector("minHand");
let hourHand = selector("hourHand");

let hourTxt = selector("hours");
let minText = selector("minutes");
let secondTxt = selector("seconds");

function updateTime() {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let displayHour = hours % 12;
  if (displayHour === 0) displayHour = 12;

  hourTxt.textContent = String(displayHour).padStart(2, "0");
  minText.textContent = String(minutes).padStart(2, "0");
  secondTxt.textContent = String(seconds).padStart(2, "0");

  let secondAngle = seconds * 6;
  let minuteAngle = minutes * 6 + seconds * 0.1;
  let hourAngle = displayHour * 30 + minutes * 0.5;

  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
  minHand.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
}

updateTime();
setInterval(updateTime, 1000);
