import runEngine from '../index.js';
import getRandomNumber from '../getRandom.js';

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const randomNumber = getRandomNumber(0, 100);

  const questionForUser = `${randomNumber}`;

  const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [questionForUser, trueAnswer];
};

const runGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  runEngine(rules, generateRound);
};

export default runGame;
