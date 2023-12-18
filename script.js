'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  // IF THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number';
  }
  // IF GUESS NUMBER IS GREATER THAN THE SECRET NUMBER
  else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? '📈 Too high!' : '📉 Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  }
  // IF THE YOU GUESS THE SECRET NUMBER
  else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the score and number variables.
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// else if (guess > number) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too high!';
//     score = score - 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = '0';
//   }
// }
// IF GUESS NUMBER IS LOWER THAN SECRET NUMBER
// else if (guess < number) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too low!';
//     score = score - 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = '0';
//   }
// }
