import { showQuestion, setUserInput } from '../../utils/interaction.js';
import { getRandomInt, isInt } from '../../utils/utils.js';

export const getRules = () => 'Find the greatest common divisor of given numbers.';

const getLeastCommonDivisor = (num1, num2) => {
  let count = 2;
  while (count <= (num1 + num2) / 2) {
    if (num1 % count === 0 && num2 % count === 0) {
      return count;
    }
    count += 1;
  }
  return 1;
};

export const run = () => {
  let resultGame = true;
  const [number1, number2] = [getRandomInt(50), getRandomInt(50)];

  showQuestion(`${number1} ${number2}`);
  const inputStr = Number(setUserInput());
  const inputInt = Number(inputStr);
  const leastCommonDivisor = getLeastCommonDivisor(number1, number2);

  if (!isInt(inputInt) || inputInt !== leastCommonDivisor) {
    resultGame = false;
  }

  return [leastCommonDivisor, inputStr, resultGame];
};
