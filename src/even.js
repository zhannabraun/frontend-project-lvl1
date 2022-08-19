import readlineSync from 'readline-sync';
import getUserName from './cli.js';

// Функция рандомного числа
const getRandomNumber = () => Math.floor(Math.random() * 9 + 1);

// Функция, создающая массив из трех чисел для игры Brain-Even
const getNumbersForBrainEven = () => {
  const numbers = [];

  for (let i = 2; i >= 0; i -= 1) {
    const randomNum = getRandomNumber();
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    } else {
      i += 1;
    }
  }
  return numbers;
};

// Brain-even
const playBrainEvenGame = () => {
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numbers = getNumbersForBrainEven();

  for (let i = 0; i < numbers.length; i += 1) {
    const isEven = numbers[i] % 2 === 0;
    console.log(`Question: ${numbers[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isEven === true) {
      switch (userAnswer) {
        case 'yes':
          console.log('Correct!');
          break;
        case 'no':
          console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
          return `Let's try again, ${userName}!`;
        default:
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
          return `Let's try again, ${userName}!`;
      }
    }

    if (isEven === false) {
      switch (userAnswer) {
        case 'yes':
          console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
          return `Let's try again, ${userName}!`;
        case 'no':
          console.log('Correct!');
          break;
        default:
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
          return `Let's try again, ${userName}!`;
      }
    }
  }
  return `Congratulations, ${userName}!`;
};

export default playBrainEvenGame;
