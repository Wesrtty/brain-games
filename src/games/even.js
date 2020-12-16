import { showQuestion, setUserInput } from '../../utils/interaction';
import { getRandomInt } from "../../utils/utils";

export const run= () => {
  let resultGame = true;
  const number = getRandomInt(100);

  showQuestion(number);
  const input = setUserInput();

  if (!isValid(input) || !isEven(number) === (input === 'yes')) {
    resultGame = false;
  }

  return [isEven(number) ? 'yes' : 'no', input, resultGame];
};

export const getRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isValid = (input) => ['yes', 'no'].includes(input);

const isEven = (number) => number % 2 === 0;