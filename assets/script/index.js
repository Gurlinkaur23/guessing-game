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
const guess = select(".guess");
const inputNumber = select(".input-number");
const message = select(".message");

// Main code
let randomNumber = Math.floor(Math.random() * 50 + 1);

// Validaton

// Events
