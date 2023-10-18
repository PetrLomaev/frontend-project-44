#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser, getRandomNumber } from '../index.js';

const userName = welcomeUser();
console.log('What is the result of the expression?');
const calc = () => {
  const arrSymbols = ['+', '-', '*'];
  let victoriesCount = 0;
  let trueAnswer = 0;
  for (let i = 0; i <= 3; i += 1) {
    if (victoriesCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const randomIndex = Math.floor(Math.random() * (arrSymbols.length));
    const randomSymbol = arrSymbols[randomIndex];
    const randomNumber1 = getRandomNumber(0, 100);
    const randomNumber2 = getRandomNumber(0, 20);
    console.log(`Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomSymbol === '+') {
      trueAnswer = randomNumber1 + randomNumber2;
    }
    if (randomSymbol === '-') {
      trueAnswer = randomNumber1 - randomNumber2;
    }
    if (randomSymbol === '*') {
      trueAnswer = randomNumber1 * randomNumber2;
    }
    if (parseInt(userAnswer, 10) === trueAnswer) {
      console.log('Correct!');
      victoriesCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default calc;
