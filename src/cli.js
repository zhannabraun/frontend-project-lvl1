import readlineSync from 'readline-sync';

const showGreetingByName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`;
};

export default showGreetingByName;
