import engineBrainGames from '../index.js';
import getRandomNumber from '../getRandom.js';

const isPrime = () => {
  const arrSymbols = ['+', '-', '*'];
  let trueAnswer = 0;
  const randomSymbol = arrSymbols[getRandomNumber(0, arrSymbols.length - 1)];
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 20);
  if (randomSymbol === '+') {
    trueAnswer = String(randomNumber1 + randomNumber2);
  }
  if (randomSymbol === '-') {
    trueAnswer = String(randomNumber1 - randomNumber2);
  }
  if (randomSymbol === '*') {
    trueAnswer = String(randomNumber1 * randomNumber2);
  }
  return [randomSymbol, randomNumber1, randomNumber2, trueAnswer];
};

const gameRound = () => {
  const [randomSymbol, randomNumber1, randomNumber2, trueAnswer] = isPrime();
  const questionForUser = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
  return [questionForUser, trueAnswer];
};

const calc = () => {
  const gameDescription = 'What is the result of the expression?';
  engineBrainGames(gameDescription, gameRound);
};
export default calc;
