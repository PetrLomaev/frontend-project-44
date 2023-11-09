import runEngine from '../index.js';
import getRandomNumber from '../getRandom.js';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(0, 100);

  const randomNumber2 = getRandomNumber(0, 100);

  const questionForUser = `${randomNumber1} ${randomNumber2}`;

  const trueAnswer = getGcd(randomNumber1, randomNumber2);

  return [questionForUser, trueAnswer];
};

const runGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  runEngine(rules, generateRound);
};

export default runGame;
