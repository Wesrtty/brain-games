import { getRandomInt } from '../utils.js';

export const showRules = () => console.log('What is the result of the expression?');

const getRandomSign = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.ceil(Math.random() * operations.length - 1)];
};

const getResultMathOperation = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      console.log(`${operation} is not found.`);
  }
  return null;
};

export const getTask = () => `${getRandomInt(0, 40)} ${getRandomSign()} ${getRandomInt(0, 40)}`;

export const getCorrectAnswer = (task) => {
  const [num1, operation, num2] = task.split(' ');
  return getResultMathOperation(Number(num1), operation, Number(num2)).toString();
};
