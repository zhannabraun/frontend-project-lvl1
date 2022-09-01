export const getRandomNumber = (min, max) => {
  const num = Math.random() * (max + 1 - min) + min;
  return Math.floor(num);
};

export const calculate = (number1, number2, operator) => {
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
