import playGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const getRoundData = () => {
  const number = getRandomNumber(1, 100);

  const question = `${number}`;

  let correctAnswer;

  if (number % 2 === 0) {
    correctAnswer = 'yes';
  }
  if (number % 2 !== 0) {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => playGame(getRoundData, description);

export default brainEven;
