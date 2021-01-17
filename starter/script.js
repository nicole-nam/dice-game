'use strict';

//SELECTING ELEMENTS

//buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//scores
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

//dice
const dice = document.querySelector('.dice');

let score = 0;

//RESET THE GAME

const init = () => {
  // 1. remove the dice image
  dice.classList.add('hidden');
  // 2. set all scores to 0
  score0.textContent = score;
  score1.textContent = score;
};

init();
