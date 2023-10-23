import readlineSync from 'readline-sync';
//import { even } from '../src/games/code_brain-even.js';
import { gameRound } from '../src/games/code_brain-even.js';
import { gameRound } from '../src/games/code_brain-calc.js';

export const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export const engineBrainGames = (gameDescription, questionForUser, trueAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  let victoriesCount = 0;
  for (let i = 0; i <= 3; i += 1) {
    if (victoriesCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    console.log(questionForUser);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      victoriesCount += 1;
      [gameDescription, questionForUser, trueAnswer] = gameRound();
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
