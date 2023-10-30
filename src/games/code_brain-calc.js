import engineBrainGames from '../index.js';
import getRandomNumber from '../getRandom.js';

const arrSymbols = ['+', '-', '*'];
const calculate = (firstNum, arithmeticOperation, secondNum) => {
  let trueAnswer = '';
  switch (arithmeticOperation) {
    case '+':
      trueAnswer = firstNum + secondNum;
      break;
    case '-':
      trueAnswer = firstNum - secondNum;
      break;
    case '*':
      trueAnswer = firstNum * secondNum;
      break;
    default:
      return trueAnswer;
  }
  return trueAnswer;
};

const gameRound = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomSymbol = arrSymbols[getRandomNumber(0, arrSymbols.length - 1)];
  const randomNumber2 = getRandomNumber(0, 20);
  const questionForUser = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
  const trueAnswer = calculate(randomNumber1, randomSymbol, randomNumber2);
  return [questionForUser, trueAnswer];
};

const calc = () => {
  const gameDescription = 'What is the result of the expression?';
  engineBrainGames(gameDescription, gameRound);
};
export default calc;
