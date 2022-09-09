import playGame from '../index.js';
import getRandomNumber from '../utilities.js';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getRoundData = () => {
  const number = getRandomNumber(1, 100);

  const question = `${number}`;
  const correctAnswer = isPrime(number) === true ? 'yes' : 'no';

  return [question, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playBrainPrime = () => playGame(getRoundData, description);

export default playBrainPrime;
