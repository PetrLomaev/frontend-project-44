#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../index.js';
const userName = welcomeUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
export const prime = () => {
    let trueAnswer = '';
    let sumOfVictory = 0;
    for (let i = 0; i <= 3; i += 1) {
        if (sumOfVictory === 3) {
            console.log('Congratulations, ' + userName + '!');
            break;
        }
        let randomNumber = Math.floor(Math.random() * 100);
        console.log('Question: ' + randomNumber);
        let userAnswer = readlineSync.question('Your answer: ');
        if (randomNumber === 2 || randomNumber === 3 || randomNumber === 5) {
            trueAnswer = 'yes';
        } else if (randomNumber % 2 !== 0 && randomNumber % 3 !== 0 && randomNumber % 5 !== 0 && randomNumber && randomNumber % 7 !==0) {
            trueAnswer = 'yes';
        } else if (randomNumber === 0 || randomNumber === 1) {
            trueAnswer = 'no';
        } else {
            trueAnswer = 'no';
        }
        if (userAnswer === trueAnswer) {
            console.log('Correct!');
            sumOfVictory += 1;
        } else {
            console.log("'" + userAnswer + "' " + "is wrong answer ;(. Correct answer was " + "'" + trueAnswer + "'.\nLet's try again, " + userName + "!");
            break;
        }
    }
};