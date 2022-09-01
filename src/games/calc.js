import playGame from '../index.js';
import { getRandomNumber, calculate } from '../utilities.js';

const brainCalc = () => {
  const dataRounds = [];

  while (dataRounds.length < 3) {
    const number1 = getRandomNumber(1, 29);
    const number2 = getRandomNumber(5, 19);

    const operators = ['+', '-', '*'];
    const index = Math.floor(Math.random() * operators.length);
    const operator = operators[index];

    const question = `${number1} ${operator} ${number2}`;

    let correctAnswer = calculate(number1, number2, operator);
    correctAnswer = String(correctAnswer);

    dataRounds.push([question, correctAnswer]);
  }

  const task = 'What is the result of the expression?';

  const dataGame = [dataRounds, task].flat();

  return playGame(dataGame);
};

export default brainCalc;
