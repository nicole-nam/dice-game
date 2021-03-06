'use strict';

////////////SELECTING ELEMENTS
//buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//scores
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
//players
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//dice
const dice = document.querySelector('.dice');
//score
let score, currentScore, currentPlayer, totalScore, playing;

////////////RESET THE GAME
const init = () => {
  score = 0;
  currentScore = 0;
  currentPlayer = 0;
  totalScore = [0, 0];
  playing = true;
  // 1. remove the dice image
  dice.classList.add('hidden');
  // 2. set all scores to 0
  score0.textContent = score;
  score1.textContent = score;
};

init();

////////////SWITCH PLAYERS
const switchPlayer = () => {
  // 1. remove class player--active and add it to player 2 vice versa
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  // 2. currentScore = 0 , of the current player
  currentScore = 0;
  document.getElementById(
    `current--${currentPlayer}`
  ).textContent = currentScore;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
};

////////////ROLL DICE
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. generate random number
    const randomNum = Math.trunc(Math.random() * 6 + 1);
    console.log(randomNum);
    // 2. change the dice image showing randomly generated number
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNum}.png`;
    // 3. add random number to the current number and show it
    // if randomNum is 1 switch player
    if (randomNum !== 1) {
      currentScore += randomNum;
      document.getElementById(
        `current--${currentPlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

////////////HOLD SCORE
btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. add current score to total score if totalscore is <= 100
    totalScore[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      totalScore[currentPlayer];

    if (totalScore[currentPlayer] >= 100) {
      playing = false;
      console.log(currentPlayer);
      // 1. remove dice
      dice.classList.add('hidden');
      // 2. add winner background
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      // 3. remove current player background
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

////////////start new game
btnNew.addEventListener('click',init);