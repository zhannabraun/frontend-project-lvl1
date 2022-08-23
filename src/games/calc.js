import { getRandomNumber, getRandomOperator } from '../utilities.js';

const brainCalc = () => {
  const number1 = getRandomNumber(1, 29);
  const number2 = getRandomNumber(5, 19);
  const operator = getRandomOperator();

  const question = `${number1} ${operator} ${number2}`;

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = (number1 + number2);
      break;
    case '-':
      correctAnswer = (number1 - number2);
      break;
    case '*':
      correctAnswer = (number1 * number2);
      break;
    default:
  }

  correctAnswer = String(correctAnswer);

  const task = 'What is the result of the expression?';

  return [[question, correctAnswer], task];
};

export default brainCalc;
