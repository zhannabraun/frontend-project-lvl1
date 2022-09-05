import playGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const getRoundData = () => {
  const number1 = getRandomNumber(3, 50);
  const number2 = getRandomNumber(3, 50);

  const question = `${number1} ${number2}`;

  let lessNumber;

  if (number1 < number2) {
    lessNumber = number1;
  } else {
    lessNumber = number2;
  }

  let correctAnswer;

  for (let i = lessNumber; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      correctAnswer = String(i);
      break;
    }
  }

  return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => playGame(getRoundData, description);

export default brainGcd;
