import playGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const getRoundData = () => {
  const number = getRandomNumber(1, 100);

  const question = `${number}`;
  const correctAnswer = isEven(number);

  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playBrainEven = () => playGame(getRoundData, description);

export default playBrainEven;
