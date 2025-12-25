const songs = [
    { title: "preet", file: "preet.mp3"},
    { title: "Adhoora", file: "adhoora.mp3" },
    { title: "Sadiyan", file: "sadiyan.mp3" },
    { title: "Zulfein", file: "zulfein.mp3" },
    { title: "Humdum", file: "humdum.mp3" }
];

let currentSongIndex = 0;
const audio = document.getElementById("myAudio");
const songTitle = document.getElementById("song-title");
const playBtn = document.getElementById("playBtn");

// 1. Loading screen logic
window.onload = () => {
    setTimeout(() => nextScreen(2), 3000);
};

// 2. Screen Switcher
function nextScreen(screenNum) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('screen-' + screenNum).classList.remove('hidden');
    if(screenNum === 6) loadSong(0); // Load music when reaching music screen
}

// 3. Music Controls
function loadSong(index) {
    songTitle.innerText = songs[index].title;
    audio.src = songs[index].file;
}

function togglePlay() {
    if (audio.paused) {
        audio.play().catch(e => alert("Please upload " + songs[currentSongIndex].file));
        playBtn.innerHTML = "⏸ Pause";
    } else {
        audio.pause();
        playBtn.innerHTML = "▶ Play";
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}