import runEngine from '../index.js';
import getRandomNumber from '../getRandom.js';

const arrSymbols = ['+', '-', '*'];

const calculate = (firstNum, arithmeticOperation, secondNum) => {
  switch (arithmeticOperation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Invalid operator - ${arithmeticOperation}`);
  }
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(0, 100);

  const randomSymbol = arrSymbols[getRandomNumber(0, arrSymbols.length - 1)];

  const randomNumber2 = getRandomNumber(0, 20);

  const questionForUser = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;

  const trueAnswer = calculate(randomNumber1, randomSymbol, randomNumber2);

  return [questionForUser, trueAnswer];
};

const runGame = () => {
  const rules = 'What is the result of the expression?';

  runEngine(rules, generateRound);
};

export default runGame;
