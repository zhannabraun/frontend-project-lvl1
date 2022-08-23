import {
  showGreeting, displayTask, askQuestion, getAnswer, compareAnswers,
} from './utilities.js';

const playGame = (gameName) => {
  const userName = showGreeting();

  const dataRound1 = gameName();
  const dataRound2 = gameName();
  const dataRound3 = gameName();
  const dataRounds = [dataRound1[0], dataRound2[0], dataRound3[0]];

  const task = dataRound1[1];
  displayTask(task);

  for (let i = 0; i < dataRounds.length;) {
    const question = dataRounds[i][0];
    const correctAnswer = dataRounds[i][1];
    askQuestion(question);
    const userAnswer = getAnswer();
    const isWon = compareAnswers(userAnswer, correctAnswer);

    if (isWon === true) {
      i += 1;
    } else {
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

export default playGame;
