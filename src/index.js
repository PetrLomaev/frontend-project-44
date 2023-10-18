import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export const getRandomNumber = (begin, end) => {
  const arrNumbers = [];
  for (let i = begin; i <= end; i += 1) {
    arrNumbers.push(i);
  }
  const randomIndex = Math.floor(Math.random() * arrNumbers.length);
  const result = arrNumbers[randomIndex];
  return result;
};
