import playGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const isPrime = (number) => {
  if (number === 1) {
    return 'no';
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getRoundData = () => {
  const number = getRandomNumber(1, 100);

  const question = `${number}`;
  const correctAnswer = isPrime(number);

  return [question, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playBrainPrime = () => playGame(getRoundData, description);

export default playBrainPrime;
