#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser, getRandomNumber } from '../index.js';

const userName = welcomeUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const even = () => {
  let trueAnswer = '';
  let victoriesCount = 0;
  for (let i = 0; i <= 3; i += 1) {
    if (victoriesCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const randomNumber = getRandomNumber(0, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      victoriesCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default even;
