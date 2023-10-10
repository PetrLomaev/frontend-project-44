#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/index.js';
const userName = welcomeUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const parity = () => {
    let checkParity = '';
    let sumOfVictory = 0;
    for (let i = 0; i <= 3; i += 1) {
        if (sumOfVictory === 3) {
            console.log('Congratulations, ' + userName + '!');
            break;
        }
        let randomNumber = Math.floor(Math.random() * 100);
        console.log('Question: ' + randomNumber);
        let userAnswer = readlineSync.question('Your answer: ');
        if (randomNumber % 2 === 0) {
            checkParity = 'yes';
        } else {
            checkParity = 'no';
        }
        if (userAnswer === checkParity) {
            console.log('Correct!');
            sumOfVictory += 1;
        } else {
            console.log("'" + userAnswer + "' " + "is wrong answer ;(. Correct answer was " + "'" + checkParity + "'.\nLet's try again, " + userName + "!");
            break;
        }
    }
};
parity();