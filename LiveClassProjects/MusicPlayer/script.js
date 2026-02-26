const musicAppData = {
  hero: {
    artistName: "Arijit Singh",
    description: "Top Indian Artist with 100M+ Streams Worldwide",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    followers: "45M",
  },

  playlist: [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: "3:20",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      audio: "assets/audio1.mp3",
    },
    {
      id: 2,
      title: "Stay",
      artist: "Justin Bieber",
      duration: "2:54",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      audio: "assets/audio3.mp3",
    },
    {
      id: 3,
      title: "Kesariya",
      artist: "Arijit Singh",
      duration: "4:28",
      cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      audio: "assets/audio2.mp3",
    },
  ],

  popularSongs: [
    {
      id: 101,
      title: "Perfect",
      artist: "Ed Sheeran",
      plays: "890M",
      cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885",
    },
    {
      id: 102,
      title: "Shape of You",
      artist: "Ed Sheeran",
      plays: "1.2B",
      cover: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    },
    {
      id: 103,
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      plays: "670M",
      cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
    },
  ],

  popularArtists: [
    {
      id: 201,
      name: "Arijit Singh",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      monthlyListeners: "30M",
    },
    {
      id: 202,
      name: "The Weeknd",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
      monthlyListeners: "80M",
    },
    {
      id: 203,
      name: "Dua Lipa",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      monthlyListeners: "55M",
    },
  ],
};

let currentAudio = new Audio();
let currentSongIndex = null;

const playlistDiv = document.querySelector(".playlist");
const songCardsContainer = document.querySelector(".songCards");
const artistContainer = document.querySelector(".artistCards");

const bottomTitle = document.querySelector(".song-info p");
const bottomArtist = document.querySelector(".song-info span");
const bottomThumb = document.querySelector(".thumb");

const playButton = document.querySelector(".controls .play");
const prevButton = document.querySelector(".controls button:nth-child(1)");
const nextButton = document.querySelector(".controls button:nth-child(3)");
const progressBar = document.querySelector(".progress input");
let searchInput = document.querySelector("#searchInput");
let searchSuugestions = document.querySelector(".searchSuggestions");
console.log(searchSuugestions);

//display playlist dynamically

musicAppData.playlist.forEach((ele, index) => {
  const listItem = document.createElement("div");
  const numberSpan = document.createElement("span");
  const imageDiv = document.createElement("div");
  const songDetails = document.createElement("div");
  const songName = document.createElement("h5");
  const artistName = document.createElement("h6");
  const playPause = document.createElement("div");

  listItem.classList.add("listItem");
  imageDiv.classList.add("song-image");
  songDetails.classList.add("songDetails");
  playPause.classList.add("playPause");

  numberSpan.textContent = ele.id;
  songName.textContent = ele.title;
  artistName.textContent = ele.artist;
  playPause.textContent = "▶";

  imageDiv.style.backgroundImage = `url(${ele.cover})`;
  imageDiv.style.backgroundSize = "cover";
  imageDiv.style.backgroundPosition = "center";

  songDetails.appendChild(songName);
  songDetails.appendChild(artistName);

  listItem.appendChild(numberSpan);
  listItem.appendChild(imageDiv);
  listItem.appendChild(songDetails);
  listItem.appendChild(playPause);

  playlistDiv.appendChild(listItem);

  // CLICK PLAy
  listItem.addEventListener("click", () => {
    playSong(index);
  });
});

musicAppData.popularSongs.forEach((song) => {
  const card = document.createElement("div");
  const img = document.createElement("div");
  const title = document.createElement("h5");
  const artist = document.createElement("p");

  card.classList.add("songCard");

  img.style.backgroundImage = `url(${song.cover})`;
  img.style.height = "120px";
  img.style.backgroundSize = "cover";
  img.style.borderRadius = "15px";

  title.textContent = song.title;
  artist.textContent = song.artist;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(artist);

  songCardsContainer.appendChild(card);
});

//  RENDER ARTISTS

musicAppData.popularArtists.forEach((artist) => {
  const card = document.createElement("div");
  const img = document.createElement("div");
  const name = document.createElement("p");

  card.classList.add("artistCard");

  img.style.backgroundImage = `url(${artist.image})`;
  img.style.height = "100%";
  img.style.backgroundSize = "cover";
  img.style.borderRadius = "50%";

  name.textContent = artist.name;
  name.style.textAlign = "center";
  name.style.marginTop = "10px";

  card.appendChild(img);
  card.appendChild(name);

  artistContainer.appendChild(card);
});

// PLAY SONG FUNCTION

function playSong(index) {
  const song = musicAppData.playlist[index];

  // If same song clicked → toggle
  if (currentSongIndex === index && !currentAudio.paused) {
    currentAudio.pause();
    playButton.textContent = "▶";
    return;
  }

  currentAudio.src = song.audio;
  currentAudio.play();
  currentSongIndex = index;

  // Update bottom player
  bottomTitle.textContent = song.title;
  bottomArtist.textContent = song.artist;
  bottomThumb.style.backgroundImage = `url(${song.cover})`;
  bottomThumb.style.backgroundSize = "cover";
  bottomThumb.style.backgroundPosition = "center";

  playButton.textContent = "⏸";

  highlightCurrentSong();
}

//  HIGHLIGHT CURRENT SONG

function highlightCurrentSong() {
  const allItems = document.querySelectorAll(".listItem");

  allItems.forEach((item) => {
    item.style.background = "#1e1e1e";
  });

  if (currentSongIndex !== null) {
    allItems[currentSongIndex].style.background = "#1db954";
  }
}

//  PLAY / PAUSE BUTTON

playButton.addEventListener("click", () => {
  if (!currentAudio.src) return;

  if (currentAudio.paused) {
    currentAudio.play();
    playButton.textContent = "⏸";
  } else {
    currentAudio.pause();
    playButton.textContent = "▶";
  }
});

//  NEXT / PREVIOUS

nextButton.addEventListener("click", () => {
  if (currentSongIndex === null) return;

  let nextIndex = (currentSongIndex + 1) % musicAppData.playlist.length;
  playSong(nextIndex);
});

prevButton.addEventListener("click", () => {
  if (currentSongIndex === null) return;

  let prevIndex =
    (currentSongIndex - 1 + musicAppData.playlist.length) %
    musicAppData.playlist.length;

  playSong(prevIndex);
});

//  PROGRESS BAR UPDATE

currentAudio.addEventListener("timeupdate", () => {
  if (currentAudio.duration) {
    progressBar.value =
      (currentAudio.currentTime / currentAudio.duration) * 100;
  }
});

progressBar.addEventListener("input", () => {
  if (currentAudio.duration) {
    currentAudio.currentTime =
      (progressBar.value / 100) * currentAudio.duration;
  }
});

//  AUTO NEXT WHEN ENDED

currentAudio.addEventListener("ended", () => {
  nextButton.click();
});

searchInput.addEventListener("input", (e) => {
  let searchValue = e.target.value.toLowerCase().trim();

  // Clear previous results
  searchSuugestions.innerHTML = "";

  if (!searchValue) {
    searchSuugestions.style.display = "none";
    return;
  }

  const results = musicAppData.playlist.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchValue),
    ),
  );

  if (results.length === 0) {
    searchSuugestions.style.display = "none";
    return;
  }

  searchSuugestions.style.display = "block";

  results.forEach((song) => {
    const div = document.createElement("div");
    div.classList.add("search-item");

    div.innerHTML = `
      <img src="${song.cover}" />
      <div class="info">
        <strong>${song.title}</strong>
        <small style="color:#aaa">${song.artist}</small>
      </div>
    `;

    // Click → play song
    div.addEventListener("click", () => {
      const index = musicAppData.playlist.findIndex((s) => s.id === song.id);

      playSong(index);

      searchSuugestions.style.display = "none";
      searchInput.value = "";
    });

    searchSuugestions.appendChild(div);
  });
});
