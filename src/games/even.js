import { getRandomNumber } from '../utilities.js';

const brainEven = () => {
  const number = getRandomNumber(1, 100);

  const question = `${number}`;

  let correctAnswer;

  if (number % 2 === 0) {
    correctAnswer = 'yes';
  }
  if (number % 2 !== 0) {
    correctAnswer = 'no';
  }

  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  return [[question, correctAnswer], task];
};

export default brainEven;
