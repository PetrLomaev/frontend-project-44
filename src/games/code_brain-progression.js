import runEngine from '../index.js';
import getRandomNumber from '../getRandom.js';

const doProgression = (first, step, lengthOfProgression, hiddenIndex) => {
  const arrProgression = [first];

  let numberOfProgression = first;
  for (let i = 1; i < lengthOfProgression; i += 1) {
    numberOfProgression += step;
    arrProgression.push(numberOfProgression);
  }
  arrProgression[hiddenIndex] = '..';
  return arrProgression.join(' ');
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(0, 100);

  const randomNumber2 = getRandomNumber(2, 10);

  const quantityNumbers = getRandomNumber(5, 10);

  const randomIndex = getRandomNumber(0, quantityNumbers - 1);

  const questionForUser = doProgression(randomNumber1, randomNumber2, quantityNumbers, randomIndex);

  const trueAnswer = randomNumber2 * randomIndex + randomNumber1;

  return [questionForUser, trueAnswer];
};

const runGame = () => {
  const rules = 'What number is missing in the progression?';

  runEngine(rules, generateRound);
};

export default runGame;
