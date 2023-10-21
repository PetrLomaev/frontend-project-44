import readlineSync from 'readline-sync';
import { welcomeUser, getRandomNumber } from '../index.js';

const userName = welcomeUser();
console.log('Find the greatest common divisor of given numbers.');
const getArrDivider = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const maxRandomNumber = Math.max(randomNumber1, randomNumber2);
  const arrDivider = [];
  let trueGCD = 0;
  for (let i = 1; i <= maxRandomNumber; i += 1) {
    if (randomNumber1 % randomNumber2 === 0) {
      trueGCD = randomNumber2;
      return [randomNumber1, randomNumber2, trueGCD];
    }
    if (randomNumber2 % randomNumber1 === 0) {
      trueGCD = randomNumber1;
      return [randomNumber1, randomNumber2, trueGCD];
    }
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      arrDivider.push(i);
      trueGCD = Math.max(...arrDivider);
    }
  }
  return [randomNumber1, randomNumber2, trueGCD];
};
const gcd = () => {
  let victoriesCount = 0;
  for (let i = 0; i <= 3; i += 1) {
    if (victoriesCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const arrTrueAnswer = getArrDivider();
    const randomNumber1 = arrTrueAnswer[0];
    const randomNumber2 = arrTrueAnswer[1];
    const trueAnswer = arrTrueAnswer[2];
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (parseInt(userAnswer, 10) === trueAnswer) {
      console.log('Correct!');
      victoriesCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default gcd;
