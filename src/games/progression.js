import playGame from '../index.js';
import getRandomNumber from '../utilities.js';

const buildProgression = (firstProgressionNumber, progressionDiff) => {
  const progressionLength = 10;
  const progression = [firstProgressionNumber];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression[i + 1] = progression[i] + progressionDiff;
  }

  return progression;
};

const getRoundData = () => {
  const firstProgressionNumber = getRandomNumber(2, 50);
  const progressionDiff = getRandomNumber(3, 9);
  const indexOfHiddenElement = getRandomNumber(0, 9);
  const progression = buildProgression(firstProgressionNumber, progressionDiff);
  const correctAnswer = String(progression[indexOfHiddenElement]);
  progression[indexOfHiddenElement] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const description = 'What number is missing in the progression?';

const playBrainProgression = () => playGame(getRoundData, description);

export default playBrainProgression;
