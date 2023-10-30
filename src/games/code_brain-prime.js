import engineBrainGames from '../index.js';
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

const gameRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const questionForUser = `${randomNumber}`;
  const trueAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [questionForUser, trueAnswer];
};

const prime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engineBrainGames(gameDescription, gameRound);
};
export default prime;
