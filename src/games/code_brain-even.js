import engineBrainGames from '../index.js';
import getRandomNumber from '../getRandom.js';

const isEven = (number) => (number % 2 === 0);

const gameRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const questionForUser = `${randomNumber}`;
  const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [questionForUser, trueAnswer];
};

const even = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  engineBrainGames(gameDescription, gameRound);
};
export default even;
