#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/index.js';
const userName = welcomeUser();
console.log('Find the greatest common divisor of given numbers.');
let doArrDivisor = () => {
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 100);
    let maxRandomNumber = Math.max(randomNumber1, randomNumber2);
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
    let sumOfVictory = 0;
    for (let i = 0; i <= 3; i += 1) {
        if (sumOfVictory === 3) {
            console.log('Congratulations, ' + userName + '!');
            break;
        }
        let arrTrueAnswer = doArrDivisor();
        let randNum1 = arrTrueAnswer[0];
        let randNum2 = arrTrueAnswer[1];
        let trueAnswer = arrTrueAnswer[2];
        console.log(`Question: ${randNum1} ${randNum2}`);
        let userAnswer = readlineSync.question('Your answer: ');
        if (parseInt(userAnswer) === trueAnswer) {
            console.log('Correct!');
            sumOfVictory += 1;
        } else {
            console.log("'" + userAnswer + "' " + "is wrong answer ;(. Correct answer was " + "'" + trueAnswer + "'.\nLet's try again, " + userName + "!");
            break;
        }
    }
};
gcd();