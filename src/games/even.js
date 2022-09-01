import playGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const brainEven = () => {
  const dataRounds = [];

  while (dataRounds.length < 3) {
    const number = getRandomNumber(1, 100);

    const question = `${number}`;

    let correctAnswer;

    if (number % 2 === 0) {
      correctAnswer = 'yes';
    }
    if (number % 2 !== 0) {
      correctAnswer = 'no';
    }

    dataRounds.push([question, correctAnswer]);
  }

  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const dataGame = [dataRounds, task].flat();

  return playGame(dataGame);
};

export default brainEven;
