// SELECT REQUIRED ELEMENTS

// Select custom cursor element
const cursor = document.querySelector(".cursor");

// Select image used for wheel zoom effect
const img = document.getElementById("zoomImage");

// MOUSE MOVE EVENT
// Goal: Make custom cursor follow mouse

document.addEventListener("mousemove", (e) => {
  // e.clientX → mouse X position inside viewport
  // e.clientY → mouse Y position inside viewport

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// CLICK EVENT
// Goal: Show animated circle wherever user clicks

document.addEventListener("click", (e) => {
  // Dynamically create a div element
  const circle = document.createElement("div");

  // Use fixed positioning so it stays relative
  // to the viewport instead of page scroll
  circle.style.position = "fixed";

  // Place circle exactly at click position
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";

  // Define size of circle
  circle.style.width = "30px";
  circle.style.height = "30px";

  // Styling
  circle.style.border = "2px solid green";
  circle.style.borderRadius = "50%";

  // Center circle from click point
  circle.style.transform = "translate(-50%,-50%)";

  // Apply animation
  circle.style.animation = "pulse 0.5s";

  // Add circle into DOM
  document.body.appendChild(circle);

  // Remove element after 500ms
  setTimeout(() => circle.remove(), 500);
});

// SCROLL PROGRESS BAR
// Goal: Show how much page user has scrolled

window.addEventListener("scroll", () => {
  // Current vertical scroll position
  const scrollTop = window.scrollY;

  // Total scrollable height =
  // Full webpage height - visible screen height
  const height = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate scroll percentage
  const percent = (scrollTop / height) * 100;

  // Update progress bar width dynamically
  document.querySelector(".progress-bar").style.width = percent + "%";
});

// IMAGE ZOOM USING WHEEL EVENT
// Goal:
// Scroll UP   → Zoom In
// Scroll DOWN → Zoom Out

let scale = 1;

img.addEventListener("wheel", (e) => {
  // Prevent default page scrolling
  e.preventDefault();

  // deltaY represents wheel movement
  // negative → wheel up
  // positive → wheel down

  if (e.deltaY < 0) {
    scale += 0.1; // Zoom In
  } else {
    scale -= 0.1; // Zoom Out
  }

  // Restrict zoom range between 1x and 3x
  // Prevents image breaking due to over scaling
  scale = Math.min(Math.max(1, scale), 3);

  // Apply zoom using CSS transform
  img.style.transform = `scale(${scale})`;
});

// PARALLAX SCROLL EFFECT
// Goal: Cards move at different speeds
//       while scrolling (depth illusion)

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  // Current scroll position
  let scroll = window.scrollY;

  cards.forEach((card, i) => {
    // Each card moves with different multiplier
    // creating parallax depth effect
    card.style.transform = `translateY(${scroll * (0.1 + i * 0.05)}px)`;
  });
});
