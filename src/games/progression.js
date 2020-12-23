import { getRandomInt } from '../utils.js';

export const showRules = () => console.log('What number is missing in the progression?');

const generateSequenceNumbers = (maxSize = 5) => {
  const numbers = [];
  const minSize = 5;
  let sumNumbers = 0;
  const diffBetweenNumbers = getRandomInt(1, 15);

  for (let index = 0; index < (minSize + maxSize); index += 1) {
    sumNumbers += diffBetweenNumbers;
    numbers.push(sumNumbers);
  }
  return numbers;
};

const getMissingNumber = (numbers) => {
  let difference = 1;
  let indexHiddenNumber = 1;

  for (let index = 0; index < numbers.length; index += 1) {
    const differenceBetweenNumbers = numbers[index + 1] - numbers[index];
    difference = differenceBetweenNumbers >= difference ? differenceBetweenNumbers : difference;

    if (numbers[index] === '..') {
      indexHiddenNumber = index + 1;
    }
  }
  return difference * indexHiddenNumber;
};

export const getTask = () => {
  const numbers = generateSequenceNumbers(8);
  numbers[getRandomInt(0, numbers.length - 1)] = '..';
  return numbers.join(' ');
};

export const getCorrectAnswer = (task) => {
  const numbers = task.split(' ');
  return getMissingNumber(numbers).toString();
};
