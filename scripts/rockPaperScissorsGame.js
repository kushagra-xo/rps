/*
 Title: Rock Paper Scissors 
 Description: A simple rock paper scissors game implemented in js
 Author: kushagra-xo
 Updated: Mon Oct 23 12:53:47 PM IST 2023
 */

const selectionOptions = ["ROCK", "PAPER", "SCISSORS"]

function handleButtonClick(input) {
  let randomComputerSelection = Math.floor(Math.random() * selectionOptions.length);
  let playerSelectionLocal = selectionOptions.indexOf(input.toUpperCase());
  let computerLoseIndex = (playerSelectionLocal - 1 + selectionOptions.length) % selectionOptions.length;

  if (playerSelectionLocal == randomComputerSelection) {
    alert(`RESULT: TIE\nCOMPUTER CHOSE: ${selectionOptions[randomComputerSelection]}`);
  } else if (randomComputerSelection == computerLoseIndex) {
    alert(`RESULT: WIN\nCOMPUTER CHOSE: ${selectionOptions[randomComputerSelection]}`);
  } else {
    alert(`RESULT: LOSE\nCOMPUTER CHOSE: ${selectionOptions[randomComputerSelection]}`);
  }
}
