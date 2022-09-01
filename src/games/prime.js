import playGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const brainPrime = () => {
  const dataRounds = [];

  while (dataRounds.length < 3) {
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

    dataRounds.push([question, correctAnswer]);
  }

  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const dataGame = [dataRounds, task].flat();

  return playGame(dataGame);
};

export default brainPrime;
