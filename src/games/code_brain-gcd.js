import engineBrainGames from '../index.js';
import getRandomNumber from '../getRandom.js';

const findGcd = (firstNum, secondNum) => {
  const maxNumber = Math.max(firstNum, secondNum);
  const arrDivider = [];
  let trueAnswer = 0;
  for (let i = 1; i <= maxNumber; i += 1) {
    if (firstNum % secondNum === 0) {
      trueAnswer = secondNum;
      return trueAnswer;
    }
    if (secondNum % firstNum === 0) {
      trueAnswer = firstNum;
      return trueAnswer;
    }
    if (firstNum % i === 0 && secondNum % i === 0) {
      arrDivider.push(i);
      trueAnswer = Math.max(...arrDivider);
    }
  }
  return trueAnswer;
};

const gameRound = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const questionForUser = `${randomNumber1} ${randomNumber2}`;
  const trueAnswer = findGcd(randomNumber1, randomNumber2);
  return [questionForUser, trueAnswer];
};

const gcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  engineBrainGames(gameDescription, gameRound);
};
export default gcd;
