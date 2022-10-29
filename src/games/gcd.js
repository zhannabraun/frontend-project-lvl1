import playGame from '../index.js';
import getRandomNumber from '../utilities.js';

const getGcd = (num1, num2) => ((num1 % num2) ? getGcd(num2, num1 % num2) : Math.abs(num2));

const getRoundData = () => {
  const number1 = getRandomNumber(3, 50);
  const number2 = getRandomNumber(3, 50);

  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));

  return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

const playBrainGcd = () => playGame(getRoundData, description);

export default playBrainGcd;
