const getRandomNumber = (min, max) => {
  const num = Math.random() * (max + 1 - min) + min;
  return Math.floor(num);
};

export default getRandomNumber;
