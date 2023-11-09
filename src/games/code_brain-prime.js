import runEngine from '../index.js';
import getRandomNumber from '../getRandom.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(0, 100);

  const questionForUser = `${randomNumber}`;

  const trueAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [questionForUser, trueAnswer];
};

const runGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runEngine(rules, generateRound);
};

export default runGame;
