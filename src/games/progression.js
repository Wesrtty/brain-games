import { getRandomInt, isInt } from '../../utils/utils.js';

export const showRules = () => console.log('What number is missing in the progression?');

const generateSequenceNumbers = (maxSize = 5) => {
  const numbers = [];
  const minSize = 5;
  let sumNumbers = 0;
  const diffBetweenNumbers = getRandomInt(10);

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
  numbers[getRandomInt(numbers.length - 1)] = '..';
  return numbers;
};

export const getRightAnswer = (task) => getMissingNumber(task);

export const isValid = (input) => isInt(Number(input));

export const isVictory = (task, input) => getMissingNumber(task) === Number(input);
