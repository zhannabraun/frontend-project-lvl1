import { getRandomNumber } from '../utilities.js';

const brainPrime = () => {
  const number = getRandomNumber(1, 100);

  const question = `${number}`;

  let correctAnswer = 'yes';

  for (let i = 2; i <= number / 2;) {
    if (number % i === 0) {
      correctAnswer = 'no';
      break;
    } else {
      i += 1;
    }
  }

  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  return [[question, correctAnswer], task];
};

export default brainPrime;
