const userScoreEl = document.getElementById('user-score');
const compScoreEl = document.getElementById('comp-score');
const resultEl = document.getElementById('result');

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const options = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.id;
    const compChoice = options[Math.floor(Math.random() * 3)];
    playGame(userChoice, compChoice);
  });
});

function playGame(user, comp) {
  if (user === comp) {
    resultEl.textContent = `It's a draw! You both chose ${user}.`;
  } else if (
    (user === 'rock' && comp === 'scissors') ||
    (user === 'paper' && comp === 'rock') ||
    (user === 'scissors' && comp === 'paper')
  ) {
    userScore++;
    resultEl.textContent = `You Win! ${capitalize(user)} beats ${capitalize(comp)}.`;
  } else {
    compScore++;
    resultEl.textContent = `You Lose! ${capitalize(comp)} beats ${capitalize(user)}.`;
  }

  userScoreEl.textContent = userScore;
  compScoreEl.textContent = compScore;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
