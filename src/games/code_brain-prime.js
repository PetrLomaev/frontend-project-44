import engineBrainGames from '../index.js';
import getRandomNumber from '../getRandom.js';

const isPrime = () => {
  const arrFirstPrimeNumbers = [2, 3, 5, 7];
  let trueAnswer = '';
  const randomNumber = getRandomNumber(0, 100);
  for (let i = 0; i < arrFirstPrimeNumbers.length; i += 1) {
    if (randomNumber === 0 || randomNumber === 1) {
      trueAnswer = 'no';
      return [randomNumber, trueAnswer];
    } if (arrFirstPrimeNumbers.includes(randomNumber)) {
      trueAnswer = 'yes';
      return [randomNumber, trueAnswer];
    } if (randomNumber % arrFirstPrimeNumbers[i] === 0) {
      trueAnswer = 'no';
      return [randomNumber, trueAnswer];
    }
    trueAnswer = 'yes';
  }
  return [randomNumber, trueAnswer];
};

const gameRound = () => {
  const [randomNumber, trueAnswer] = isPrime();
  const questionForUser = `${randomNumber}`;
  return [questionForUser, trueAnswer];
};

const prime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engineBrainGames(gameDescription, gameRound);
};
export default prime;
