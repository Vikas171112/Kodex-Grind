const piano = document.getElementById("piano");

// 🎵 Sounds array (28–63)
const sounds = [
  "assets/28.mp3",
  "assets/29.mp3",
  "assets/30.mp3",
  "assets/31.mp3",
  "assets/32.mp3",
  "assets/33.mp3",
  "assets/34.mp3",
  "assets/35.mp3",
  "assets/36.mp3",
  "assets/37.mp3",
  "assets/38.mp3",
  "assets/39.mp3",
  "assets/40.mp3",
  "assets/41.mp3",
  "assets/42.mp3",
  "assets/43.mp3",
  "assets/44.mp3",
  "assets/45.mp3",
  "assets/46.mp3",
  "assets/47.mp3",
  "assets/48.mp3",
  "assets/49.mp3",
  "assets/50.mp3",
  "assets/51.mp3",
  "assets/52.mp3",
  "assets/53.mp3",
  "assets/54.mp3",
  "assets/55.mp3",
  "assets/56.mp3",
  "assets/57.mp3",
  "assets/58.mp3",
  "assets/59.mp3",
  "assets/60.mp3",
  "assets/61.mp3",
  "assets/62.mp3",
  "assets/63.mp3",
];

// Pattern for black keys
const blackKeyPattern = [1, 3, 6, 8, 10];

const keyElements = []; // store created keys

// Create piano keys
sounds.forEach((soundPath, index) => {
  const notePosition = index % 12;

  const whiteKey = document.createElement("div");
  whiteKey.classList.add("white-key");
  whiteKey.innerText = 28 + index;

  whiteKey.addEventListener("click", () => {
    playSound(index);
    animateKey(whiteKey);
  });

  piano.appendChild(whiteKey);
  keyElements.push(whiteKey);

  if (blackKeyPattern.includes(notePosition)) {
    const blackKey = document.createElement("div");
    blackKey.classList.add("black-key");

    blackKey.style.left = `${index * 64 + 45}px`;

    blackKey.addEventListener("click", (e) => {
      e.stopPropagation();
      playSound(index);
      animateKey(blackKey);
    });

    piano.appendChild(blackKey);
  }
});

// 🎵 Play sound by index
function playSound(index) {
  const audio = new Audio(sounds[index]);
  audio.currentTime = 0;
  audio.play();
}

// ✨ Animate key
function animateKey(key) {
  key.style.opacity = "0.6";
  setTimeout(() => {
    key.style.opacity = "1";
  }, 150);
}

// 🎹 Keyboard Support
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  // Map keyboard letters to piano indexes
  const keyboardMap = "abcdefghijklmnopqrstuvwxyz";

  const index = keyboardMap.indexOf(key);

  if (index !== -1 && index < sounds.length) {
    playSound(index);

    // Highlight corresponding white key
    if (keyElements[index]) {
      animateKey(keyElements[index]);
    }
  }
});
