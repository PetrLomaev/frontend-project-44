import { getRandomNumber, engineBrainGames } from '../index.js';

const gameRound = () => {
  const arrSymbols = ['+', '-', '*'];
  let trueAnswer = 0;
  const randomIndex = Math.floor(Math.random() * (arrSymbols.length));
  const randomSymbol = arrSymbols[randomIndex];
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 20);
  const questionForUser = `Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`;
  if (randomSymbol === '+') {
    trueAnswer = String(randomNumber1 + randomNumber2);
  }
  if (randomSymbol === '-') {
    trueAnswer = String(randomNumber1 - randomNumber2);
  }
  if (randomSymbol === '*') {
    trueAnswer = String(randomNumber1 * randomNumber2);
  }
  return [questionForUser, trueAnswer];
};

const calc = () => {
  const gameDescription = 'What is the result of the expression?';
  engineBrainGames(gameDescription, gameRound);
};
export default calc;
