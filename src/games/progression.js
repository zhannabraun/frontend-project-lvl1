import playGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const brainProgression = () => {
  const dataRounds = [];

  while (dataRounds.length < 3) {
    const firstProgressionNumber = getRandomNumber(2, 50);
    const progressionDiff = getRandomNumber(3, 9);
    const indexOfHiddenElement = getRandomNumber(0, 9);

    const progression = [firstProgressionNumber];

    for (let i = 0; i < 9; i += 1) {
      progression[i + 1] = progression[i] + progressionDiff;
    }

    const correctAnswer = String(progression[indexOfHiddenElement]);

    progression[indexOfHiddenElement] = '..';

    const question = progression.join(' ');

    dataRounds.push([question, correctAnswer]);
  }

  const task = 'What number is missing in the progression?';

  const dataGame = [dataRounds, task].flat();

  return playGame(dataGame);
};

export default brainProgression;
