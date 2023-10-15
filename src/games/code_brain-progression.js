#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../index.js';
const userName = welcomeUser();
console.log('What number is missing in the progression?');
let doProgression = () => {
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 10);
    let randomNumber3 = Math.floor(Math.random() * 10);
    let trueAnswerProgression = 0;
    const arrProgression = [randomNumber1];
    let numberOfProgression = randomNumber1;
    for (let i = 1; i < 10; i += 1) {
        numberOfProgression += randomNumber2;
        arrProgression.push(numberOfProgression);
    }
    trueAnswerProgression = arrProgression[randomNumber3];
    arrProgression[randomNumber3] = '..';
    return [arrProgression.join(' '), trueAnswerProgression]
};
export const progression = () => {
    let sumOfVictory = 0;
    for (let i = 0; i <= 3; i += 1) {
        if (sumOfVictory === 3) {
            console.log('Congratulations, ' + userName + '!');
            break;
        }
        let arrTrueAnswer = doProgression();
        let progression = arrTrueAnswer[0];
        let trueAnswer = arrTrueAnswer[1];
        console.log(`Question: ${progression}`);
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