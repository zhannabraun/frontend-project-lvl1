import readlineSync from 'readline-sync';

const playGame = (dataGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const task = dataGame[3];
  console.log(task);

  for (let i = 0; i < dataGame.length - 1;) {
    const question = dataGame[i][0];
    const correctAnswer = dataGame[i][1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

export default playGame;
