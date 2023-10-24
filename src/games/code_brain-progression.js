import { getRandomNumber, engineBrainGames } from '../index.js';

const gameRound = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(2, 10);
  const randomIndex = getRandomNumber(0, 9);
  let trueAnswer = 0;
  const arrProgression = [randomNumber1];
  let numberOfProgression = randomNumber1;
  for (let i = 1; i < 10; i += 1) {
    numberOfProgression += randomNumber2;
    arrProgression.push(numberOfProgression);
  }
  trueAnswer = String(arrProgression[randomIndex]);
  arrProgression[randomIndex] = '..';
  const questionForUser = arrProgression.join(' ');
  return [questionForUser, trueAnswer];
};

const progression = () => {
  const gameDescription = 'What number is missing in the progression?';
  engineBrainGames(gameDescription, gameRound);
};
export default progression;
