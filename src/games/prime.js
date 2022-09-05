import playGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const getRoundData = () => {
  const number = getRandomNumber(1, 100);

  const question = `${number}`;

  let correctAnswer = 'yes';

  if (number === 1) {
    correctAnswer = 'no';
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }

  return [question, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => playGame(getRoundData, description);

export default brainPrime;
