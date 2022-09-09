import playGame from '../index.js';
import getRandomNumber from '../utilities.js';

const calculate = (number1, number2, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = (number1 + number2);
      break;
    case '-':
      result = (number1 - number2);
      break;
    case '*':
      result = (number1 * number2);
      break;
    default:
  }

  return result;
};

const getRoundData = () => {
  const number1 = getRandomNumber(1, 29);
  const number2 = getRandomNumber(5, 19);

  const operators = ['+', '-', '*'];
  const index = getRandomNumber(0, operators.length - 1);
  const operator = operators[index];

  const question = `${number1} ${operator} ${number2}`;

  let correctAnswer = calculate(number1, number2, operator);
  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};

const description = 'What is the result of the expression?';

const playBrainCalc = () => playGame(getRoundData, description);

export default playBrainCalc;
