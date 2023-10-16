#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../index.js';
import { getRandomNumber } from '../index.js';
const userName = welcomeUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const even = () => {
    let trueAnswer = '';
    let victoriesCount = 0;
    for (let i = 0; i <= 3; i += 1) {
        if (victoriesCount === 3) {
            console.log('Congratulations, ' + userName + '!');
            break;
        }
        let randomNumber = getRandomNumber(0, 100);
        console.log('Question: ' + randomNumber);
        let userAnswer = readlineSync.question('Your answer: ');
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