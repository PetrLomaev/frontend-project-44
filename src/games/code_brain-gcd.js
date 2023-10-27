import engineBrainGames from '../index.js';
import getRandomNumber from '../getRandom.js';

const isGcd = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const maxRandomNumber = Math.max(randomNumber1, randomNumber2);
  const arrDivider = [];
  let trueAnswer = 0;
  for (let i = 1; i <= maxRandomNumber; i += 1) {
    if (randomNumber1 % randomNumber2 === 0) {
      trueAnswer = String(randomNumber2);
      return [randomNumber1, randomNumber2, trueAnswer];
    }
    if (randomNumber2 % randomNumber1 === 0) {
      trueAnswer = String(randomNumber1);
      return [randomNumber1, randomNumber2, trueAnswer];
    }
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      arrDivider.push(i);
      trueAnswer = String(Math.max(...arrDivider));
    }
  }
  return [randomNumber1, randomNumber2, trueAnswer];
};

const gameRound = () => {
  const [randomNumber1, randomNumber2, trueAnswer] = isGcd();
  const questionForUser = `${randomNumber1} ${randomNumber2}`;
  return [questionForUser, trueAnswer];
};

const gcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  engineBrainGames(gameDescription, gameRound);
};
export default gcd;
