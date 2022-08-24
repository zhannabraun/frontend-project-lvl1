import { getRandomNumber } from '../utilities.js';

const brainProgression = () => {
  const firstProgressionNumber = getRandomNumber(2, 50);
  const progressionDiff = getRandomNumber(3, 7);
  const indexOfHiddenElement = getRandomNumber(0, 9);

  const progression = [firstProgressionNumber];

  for (let i = 0; i < 9; i += 1) {
    progression[i + 1] = progression[i] + progressionDiff;
  }

  const correctAnswer = String(progression[indexOfHiddenElement]);

  progression[indexOfHiddenElement] = '..';

  const question = progression.join(' ');
  const task = 'What number is missing in the progression?';

  return [[question, correctAnswer], task];
};

export default brainProgression;
