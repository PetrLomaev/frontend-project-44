import { getRandomNumber, engineBrainGames } from '../index.js';

const gameRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const questionForUser = `Question: ${randomNumber}`;
  let trueAnswer = '';
  if (randomNumber % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return [questionForUser, trueAnswer];
};

const even = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  engineBrainGames(gameDescription, gameRound);
};
export default even;
