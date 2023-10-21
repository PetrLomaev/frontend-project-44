import { getRandomNumber, engineBrainGames } from '../index.js';

const even = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  let randomNumber = getRandomNumber(0, 100);
  let questionForUser = `Question: ${randomNumber}`;
  let trueAnswer = '';
    if (randomNumber % 2 === 0) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }
  engineBrainGames(gameDescription, questionForUser, trueAnswer);
};
export default even;
