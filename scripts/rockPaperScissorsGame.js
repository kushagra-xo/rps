const selectionOptions = ["ROCK", "PAPER", "SCISSORS"]

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

let options = document.querySelector('.gameOptions');
options.addEventListener('click', (event) => {
  if (event.target.tagName == 'options') {
    handleButtonClick(event.target.id.toUpperCase());
  }
});

rock.addEventListener('click', () => handleButtonClick(selectionOptions[0]))
paper.addEventListener('click', () => handleButtonClick(selectionOptions[1]))
scissors.addEventListener('click', () => handleButtonClick(selectionOptions[2]))

let scoreElement = document.getElementById('score')
let resultElement = document.getElementById('result')
let computerChoiceElement = document.getElementById('computerChoice')

let score = 0;
let result = null;
let randomComputerSelection = null;

function updateInfo() {
  scoreElement.textContent = `Score: ${score}`;
  resultElement.textContent = `Result: ${result}`;
  computerChoiceElement.textContent = `Computer: ${selectionOptions[randomComputerSelection]}`;
}

function handleButtonClick(input) {
  randomComputerSelection = Math.floor(Math.random() * selectionOptions.length);
  let playerSelectionLocal = selectionOptions.indexOf(input.toUpperCase());
  let computerLoseIndex = (playerSelectionLocal - 1 + selectionOptions.length) % selectionOptions.length;

  if (playerSelectionLocal == randomComputerSelection) {
    result = `TIE`
  } else if (randomComputerSelection == computerLoseIndex) {
    result = `WIN`
    score++;
  } else {
    result = `LOSE`
    score--;
  }
  updateInfo();
}

window.addEventListener('DOMContentLoaded', function() {
  updateInfo();
});
