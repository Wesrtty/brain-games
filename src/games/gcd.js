import { getRandomInt, isInt } from '../../utils/utils.js';

export const showRules = () => console.log('Find the greatest common divisor of given numbers.');

const getLeastCommonDivisor = (num1, num2) => {
  if (num2) {
    return getLeastCommonDivisor(num2, num1 % num2);
  }
  return Math.abs(num1);
};

export const getTask = () => [getRandomInt(50), getRandomInt(50)];

export const getRightAnswer = (task) => getLeastCommonDivisor(...task);

export const isValid = (input) => isInt(Number(input));

export const isVictory = (task, input) => getLeastCommonDivisor(...task) === Number(input);
