#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcomeUser } from '../index.js';
import { getRandomNumber } from '../index.js';
const userName = welcomeUser();
console.log('What number is missing in the progression?');
let getProgression = () => {
    let randomNumber1 = getRandomNumber(0, 100);
    let randomNumber2 = getRandomNumber(2, 10);
    let randomIndex = getRandomNumber(0, 9);
    let trueAnswer = 0;
    const arrProgression = [randomNumber1];
    let numberOfProgression = randomNumber1;
    for (let i = 1; i < 10; i += 1) {
        numberOfProgression += randomNumber2;
        arrProgression.push(numberOfProgression);
    }
    trueAnswer = arrProgression[randomIndex];
    arrProgression[randomIndex] = '..';
    return [arrProgression.join(' '), trueAnswer];
};
export const progression = () => {
    let victoriesCount = 0;
    for (let i = 0; i <= 3; i += 1) {
        if (victoriesCount === 3) {
            console.log('Congratulations, ' + userName + '!');
            break;
        }
        let arrTrueAnswer = getProgression();
        let progression = arrTrueAnswer[0];
        let trueAnswer = arrTrueAnswer[1];
        console.log(`Question: ${progression}`);
        let userAnswer = readlineSync.question('Your answer: ');
        if (parseInt(userAnswer) === trueAnswer) {
            console.log('Correct!');
            victoriesCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
            break;
        }
    }
};