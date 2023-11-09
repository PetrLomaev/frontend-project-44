import readlineSync from 'readline-sync';

const countOfRounds = 3;

const runEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < countOfRounds; i += 1) {
    const [questionForUser, trueAnswer] = generateRound();

    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(trueAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
