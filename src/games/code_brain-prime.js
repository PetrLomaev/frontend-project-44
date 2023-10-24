import { getRandomNumber, engineBrainGames } from '../index.js';

const gameRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const arrFirstPrimeNumbers = [2, 3, 5, 7];
  let trueAnswer = '';
  const questionForUser = `Question: ${randomNumber}`;
  for (let i = 0; i < arrFirstPrimeNumbers.length; i += 1) {
    if (arrFirstPrimeNumbers.includes(randomNumber)) {
      trueAnswer = 'yes';
      return [questionForUser, trueAnswer];
    } if (randomNumber === 0 || randomNumber === 1) {
      trueAnswer = 'no';
      return [questionForUser, trueAnswer];
    } if (randomNumber % arrFirstPrimeNumbers[i] !== 0) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
      return [questionForUser, trueAnswer];
    }
  }
  return [questionForUser, trueAnswer];
};

const prime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engineBrainGames(gameDescription, gameRound);
};
export default prime;
