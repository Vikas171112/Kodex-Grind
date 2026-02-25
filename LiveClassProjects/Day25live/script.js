let statusDiv = document.querySelector(".status");

let full = document.querySelector(".full");
let growth = document.querySelector("#growth");
let progress = document.querySelector("#progress");

let grow = 0;

statusDiv.addEventListener("click", () => {
  full.style.display = "block";
  let time = setInterval(() => {
    grow++;
    console.log(grow);
    growth.style.width = `${grow}%`;
  }, 30);
  setTimeout(() => {
    clearInterval(time);
    full.style.display = "none";
    grow = 0;
  }, 3000);
});
// progress.addEventListener("click", () => {
//   grow++;
//   growth.style.width = `${grow}%`;
// });
