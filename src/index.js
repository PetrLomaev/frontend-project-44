import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => {
  const arrNumbers = [];
  for (let i = min; i <= max; i += 1) {
    arrNumbers.push(i);
  }
  const randomIndex = Math.floor(Math.random() * arrNumbers.length);
  const result = arrNumbers[randomIndex];
  return result;
};

export const engineBrainGames = (gameDescription, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  let victoriesCount = 0;
  for (let i = 0; i <= 3; i += 1) {
    const [questionForUser, trueAnswer] = gameRound();
    if (victoriesCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    console.log(questionForUser);
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
