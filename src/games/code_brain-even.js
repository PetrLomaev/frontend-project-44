import engineBrainGames from '../index.js';
import getRandomNumber from '../getRandom.js';

const isEven = () => {
  const randomNumber = getRandomNumber(0, 100);
  let trueAnswer = '';
  if (randomNumber % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return [randomNumber, trueAnswer];
};

const gameRound = () => {
  const [randomNumber, trueAnswer] = isEven();
  const questionForUser = `${randomNumber}`;
  return [questionForUser, trueAnswer];
};

const even = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  engineBrainGames(gameDescription, gameRound);
};
export default even;
