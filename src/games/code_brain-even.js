import { getRandomNumber, engineBrainGames } from '../index.js';

export const gameRound = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  let randomNumber = getRandomNumber(100);
  let questionForUser = `Question: ${randomNumber}`;
  let trueAnswer = '';
  if (randomNumber % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return [gameDescription, questionForUser, trueAnswer];
}

export const even = () => {
  const [gameDescription, questionForUser, trueAnswer] = gameRound();
  engineBrainGames(gameDescription, questionForUser, trueAnswer);
};
