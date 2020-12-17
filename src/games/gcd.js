import { showQuestion, setUserInput } from '../../utils/interaction.js';
import { getRandomInt, isInt } from '../../utils/utils.js';

export const getRules = () => 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2) {
    return gcd(num2, num1 % num2);
  } else {
    return Math.abs(num1);
  }
};

export const run = () => {
  let resultGame = true;
  const [number1, number2] = [getRandomInt(50), getRandomInt(50)];

  showQuestion(`${number1} ${number2}`);
  const inputStr = Number(setUserInput());
  const inputInt = Number(inputStr);
  const leastCommonDivisor = gcd(number1, number2);

  if (!isInt(inputInt) || inputInt !== leastCommonDivisor) {
    resultGame = false;
  }

  return [leastCommonDivisor, inputStr, resultGame];
};
