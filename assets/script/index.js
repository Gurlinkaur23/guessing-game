"use strict";

// Utility functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

// Selections
const btnPlay = select(".btn-play");
const attempts = select(".attempts");
const inputNumber = select(".input-number");
const message = select(".message");

// Main code
let randomNumber = Math.floor(Math.random() * 50 + 1);

// Validaton
function isNumber() {
  if (!isNaN(guess.value)) {
    message.innerText = guess.value > 0 && guess.value <=50 ? `${guess.value}` : 'Please enter a number from 1 to 50'
  } else {
    message.innerText = 'Please enter a valid number';
  }
}

isNumber();

// Events
