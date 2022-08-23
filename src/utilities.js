import readlineSync from 'readline-sync';

export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const displayTask = (task) => {
  console.log(task);
};

export const askQuestion = (task) => {
  console.log(`Question: ${task}`);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const compareAnswers = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const getRandomNumber = (min, max) => {
  const num = Math.random() * (max + 1 - min) + min;
  return Math.floor(num);
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  return operators[index];
};