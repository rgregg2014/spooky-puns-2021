// Confirms script file is connected
console.log("Spooky scripts are connected!!!");

// DOM Elements
const button = document.querySelector("#button");
const container = document.querySelector("#bodyContainer");
const setup = document.querySelector("#setup");
const punchline = document.querySelector("#punchline");

// Global Variables
const music = new Audio("assets/sfx/spooky.mp3");
const setups = [
  "What was the skeleton doing at the hockey game?",
  "Why are skeletons so calm?",
  "Why didn't the skeleton go to the dance?",
  "What do you call a skeleton with no friends?",
  "How do French skeletons say hello?",
  "What did the skeleton say to his girlfriend?",
  "What is a skeleton's favorite musical instrument?",
  "Who is a skeleton's favorite singer?",
  "What kind of jokes do skeletons tell?",
  "Who is the most famous French skeleton?",
];
const punchlines = [
  "Driving the zam-boney!",
  "Because nothing gets under their skin!",
  "Because he had no BODY to dance with!",
  "Bonely!",
  "Bone-jour!",
  "Will you marrow me?",
  "A trom-BONE!",
  "BONE Jovi!",
  "Humerus ones!",
  "Napoleon BONE-aparte!",
];

// Functions
function playMusic() {
  //plays music
  music.play();
}

function startHaunt() {
  //sets a 5 second timer before revealing hidden elements on page, playing music
  let jumpscare = setTimeout(function () {
    container.removeAttribute("class");
    playMusic();
  }, 5000);
}

function getRandomPun() {
  //gets a random setup and punchline, prints to HTML elements
  const index = Math.floor(Math.random() * setups.length);
  const headOne = setups[index];
  const headTwo = punchlines[index];
  setup.textContent = headOne;
  punchline.textContent = headTwo;
}

function reloadPage() {
  //reloads page after 20 seconds
  let reload = setTimeout(function () {
    location.reload();
  }, 20000);
}

function pageStart() {
  getRandomPun();
  startHaunt();
  reloadPage();
}

// Event Listeners
// document.addEventListener("click", playMusic);

// Initializers
pageStart();
