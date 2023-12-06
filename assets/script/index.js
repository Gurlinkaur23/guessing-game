'use strict';

// Utility functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

// Selections
const body = select('body');
const btnPlay = select('.btn-play');
const attemptsLeft = select('.attempts-left');
const inputNumber = select('.input-number');
const message = select('.message');
const btnGuess = select('.btn-guess');
const msgBox = select('.msg-box');

// Main code
let secretNumber = Math.trunc(Math.random() * 50 + 1);
let attempts = 5;

// Validaton
function isNumber() {
  let userGuess = parseInt(inputNumber.value.trim());

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
    message.innerText = 'Enter a valid number from 1 to 50';
    return false;
  }

  return true;
}

function compareNumbers() {
  if (!isNumber()) return;

  let userGuess = Number(inputNumber.value.trim());

  if (userGuess === secretNumber) {
    message.innerText = `Correct! The secret number was ${secretNumber}`;
    changeStyles();
  } else {
    message.innerText =
      userGuess < secretNumber ? 'Try a higher number' : 'Try a lower number';
    attempts--;
    attemptsLeft.innerText = attempts;
  }
}

function changeStyles() {
  body.style.backgroundColor = '#33ab4e';
  msgBox.style.backgroundColor = '#2a8d40';
  inputNumber.style.boxShadow = '4px 4px 5px rgb(42, 141, 64)';
  inputNumber.style.color = '#33ab4e';
  btnPlay.style.color = '#33ab4e';
  btnPlay.style.border = '1px solid #2a8d40';
  btnGuess.style.color = '#33ab4e';
  btnGuess.style.border = '1px solid #2a8d40';
}

function canGuess() {
  if (attempts > 1) {
    compareNumbers();
  } else {
    message.innerText = 'Out of attempts :( Try again!';
    attemptsLeft.innerText = 0;
  }
}

function resetGame() {
  secretNumber = Math.trunc(Math.random() * 50 + 1);
  attempts = 5;
  attemptsLeft.innerText = attempts;
  inputNumber.value = '';
  message.innerText = 'Start guessing...';
  body.style.backgroundColor = '#ff42a0';
  msgBox.style.backgroundColor = '#d92685';
  inputNumber.style.boxShadow = '4px 4px 5px rgb(217, 38, 133)';
  inputNumber.style.color = '#ff42a0';
  btnPlay.style.color = '#ff42a0';
  btnPlay.style.border = '1px solid #d82685';
  btnGuess.style.color = '#ff42a0';
  btnGuess.style.border = '1px solid #d82685';
}

// Events
onEvent('click', btnGuess, e => {
  e.preventDefault();

  canGuess();
});

onEvent('click', btnPlay, () => {
  resetGame();
});
