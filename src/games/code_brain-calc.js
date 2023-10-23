import { getRandomNumber, engineBrainGames } from '../index.js';

export const gameRound = () => {
  const gameDescription = 'What is the result of the expression?';
  const arrSymbols = ['+', '-', '*'];
  let trueAnswer = 0;
  const randomIndex = Math.floor(Math.random() * (arrSymbols.length));
  const randomSymbol = arrSymbols[randomIndex];
  const randomNumber1 = getRandomNumber(100);
  const randomNumber2 = getRandomNumber(20);
  let questionForUser = `Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`;
  if (randomSymbol === '+') {
    trueAnswer = String(randomNumber1 + randomNumber2);
  }
  if (randomSymbol === '-') {
    trueAnswer = String(randomNumber1 - randomNumber2);
  }
  if (randomSymbol === '*') {
    trueAnswer = String(randomNumber1 * randomNumber2);
  }
  return [gameDescription, questionForUser, trueAnswer];
}

export const calc = () => {
  const [gameDescription, questionForUser, trueAnswer] = gameRound();
  engineBrainGames(gameDescription, questionForUser, trueAnswer);
};

