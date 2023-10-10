#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/index.js';
const userName = welcomeUser();
console.log('What is the result of the expression?');
const calc = () => {
    const arrSymbol = ['+', '-', '*'];
    let sumOfVictory = 0;
    let trueCalcResult = 0;
    for (let i = 0; i <= 3; i += 1) {
        if (sumOfVictory === 3) {
            console.log('Congratulations, ' + userName + '!');
            break;
        }
        let randomIndex = Math.floor(Math.random() * (arrSymbol.length));
        let randomSymbol = arrSymbol[randomIndex];
        let randomNumber1 = Math.floor(Math.random() * 100);
        let randomNumber2 = Math.floor(Math.random() * 100);
        console.log(`Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`);
        let userAnswer = readlineSync.question('Your answer: ');
        if (randomSymbol === '+') {
            trueCalcResult = randomNumber1 + randomNumber2;
        }
        if (randomSymbol === '-') {
            trueCalcResult = randomNumber1 - randomNumber2;
        }
        if (randomSymbol === '*') {
            trueCalcResult = randomNumber1 * randomNumber2;
        }
        if (parseInt(userAnswer) === trueCalcResult) {
            console.log('Correct!');
            sumOfVictory += 1;
        }else {
            console.log("'" + userAnswer + "' " + "is wrong answer ;(. Correct answer was " + "'" + trueCalcResult + "'.\nLet's try again, " + userName + "!");
            break;
        }
    }
};
calc();