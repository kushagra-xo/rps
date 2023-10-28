/*
 Title: Rock Paper Scissors 
 Description: A simple rock paper scissors game implemented in js
 Author: kushagra-xo
 Updated: Mon Oct 23 12:53:47 PM IST 2023
 */

const selectionOptions = ["ROCK", "PAPER", "SCISSORS"]

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

rock.addEventListener('click', () => handleButtonClick('ROCK'))
paper.addEventListener('click', () => handleButtonClick('PAPER'))
scissors.addEventListener('click', () => handleButtonClick('SCISSORS'))

let score = 0;
document.getElementById('score').textContent = "Score: " + score;

let result = null;
document.getElementById('result').textContent = "Result: " + result;

let randomComputerSelection = null;
document.getElementById('computerChoice').textContent = "Computer: " + selectionOptions[randomComputerSelection];

function updateScore()
{
  document.getElementById('score').textContent = "Score: " + score;
}
function updateResult()
{
  document.getElementById('result').textContent = "Result: " + result;
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

  updateScore();
  updateResult();
  document.getElementById('computerChoice').textContent = "Computer: " + selectionOptions[randomComputerSelection];
}
