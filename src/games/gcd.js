import playGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const brainGcd = () => {
  const dataRounds = [];

  while (dataRounds.length < 3) {
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

    for (let i = lessNumber; i >= 1;) {
      if (number1 % i === 0 && number2 % i === 0) {
        correctAnswer = String(i);
        break;
      } else {
        i -= 1;
      }
    }

    dataRounds.push([question, correctAnswer]);
  }

  const task = 'Find the greatest common divisor of given numbers.';

  const dataGame = [dataRounds, task].flat();

  return playGame(dataGame);
};

export default brainGcd;
