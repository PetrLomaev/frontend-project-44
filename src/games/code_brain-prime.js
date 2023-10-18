#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser, getRandomNumber } from '../index.js';

const userName = welcomeUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const checkPrime = () => {
  const randomNumber = getRandomNumber(0, 100);
  const arrFirstPrimeNumbers = [2, 3, 5, 7];
  let trueAnswer = '';
  for (let i = 0; i < arrFirstPrimeNumbers.length; i += 1) {
    if (arrFirstPrimeNumbers.includes(randomNumber)) {
      trueAnswer = 'yes';
      return [randomNumber, trueAnswer];
    } if (randomNumber === 0 || randomNumber === 1) {
      trueAnswer = 'no';
      return [randomNumber, trueAnswer];
    } if (randomNumber % arrFirstPrimeNumbers[i] !== 0) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
      return [randomNumber, trueAnswer];
    }
  }
  return [randomNumber, trueAnswer];
};
const prime = () => {
  let victoriesCount = 0;
  for (let i = 0; i <= 3; i += 1) {
    if (victoriesCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const arrTrueAnswer = checkPrime();
    const randomNumber = arrTrueAnswer[0];
    const trueAnswer = arrTrueAnswer[1];
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      victoriesCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default prime;
