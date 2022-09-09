import playGame from '../index.js';
import getRandomNumber from '../utilities.js';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const number = getRandomNumber(1, 100);

  const question = `${number}`;
  const correctAnswer = isEven(number) === true ? 'yes' : 'no';

  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playBrainEven = () => playGame(getRoundData, description);

export default playBrainEven;
