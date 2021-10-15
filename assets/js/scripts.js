// Confirms script file is connected
console.log("Spooky scripts are connected!!!");

// DOM Elements
const button = document.querySelector("#button");
const container = document.querySelector("#bodyContainer");
const setup = document.querySelector("#setup");
const punchline = document.querySelector("#punchline");

// Global Variables
const music = new Audio("assets/sfx/spooky.mp3");
//setups and punchlines are in two arrays with corresponding indecies between the two
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
  //sets a 5 second timer
  let jumpscare = setTimeout(function () {
    //removes "hidden" class from parent div in HTML
    container.removeAttribute("class");
    //autoplays music
    playMusic();
  }, 5000);
}

function getRandomPun() {
  //create random index
  const index = Math.floor(Math.random() * setups.length);
  //creates new variable from global setups and punchlines at the randomly generated index
  const headOne = setups[index];
  const headTwo = punchlines[index];
  //sets the text content of globally defined DOM elements to the generated punchlines
  setup.textContent = headOne;
  punchline.textContent = headTwo;
}

function reloadPage() {
  //sets20 second timer
  let reload = setTimeout(function () {
    //reloads page
    location.reload();
  }, 20000);
}

function pageStart() {
  //runs all functions in order on page load
  getRandomPun();
  startHaunt();
  reloadPage();
}

//Event Listener
// Because of new Google Chrome policies, music will not autoplay without document interaction. This is probably a good thing, as I tried to autoplay music simply to be annoying.
document.addEventListener("click", playMusic());

// Initializers
pageStart();
