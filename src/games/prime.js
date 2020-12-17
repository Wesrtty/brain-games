import { showQuestion, setUserInput } from '../../utils/interaction.js';
import { getRandomInt } from '../../utils/utils.js';

export const getRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const run = () => {
  let resultGame = true;
  const number = getRandomInt(50);

  showQuestion(number);
  const input = setUserInput();

  if (isPrime(number) !== (input === 'yes')) {
    resultGame = false;
  }
  return [input === 'yes' ? 'no' : 'yes', input, resultGame];
};
