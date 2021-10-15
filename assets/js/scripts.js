// Confirms script file is connected
console.log("Spooky scripts are connected!!!");

// DOM Elements
const button = document.querySelector("#button");
const container = document.querySelector("#bodyContainer");

// Global Variables
const music = new Audio("assets/sfx/spooky.mp3");

// Functions
function playMusic() {
  music.play();
}

function startHaunt() {
  let jumpscare = setInterval(function () {
    container.removeAttribute("class");
  }, 5000);
}

// Event Listeners
// button.addEventListener("click", playMusic);

document.addEventListener("click", playMusic);

// Initializers
startHaunt();
