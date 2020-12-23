import { getRandomInt } from '../utils.js';

export const showRules = () => console.log('Find the greatest common divisor of given numbers.');

const getLeastCommonDivisor = (num1, num2) => {
  if (num2) {
    return getLeastCommonDivisor(num2, num1 % num2);
  }
  return Math.abs(num1);
};

export const getTask = () => `${getRandomInt(1, 50)} ${getRandomInt(1, 50)}`;

export const getCorrectAnswer = (task) => {
  const [num1, num2] = task.split(' ');
  return getLeastCommonDivisor(Number(num1), Number(num2)).toString();
};
