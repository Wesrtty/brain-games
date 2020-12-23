import { getRandomInt } from '../utils.js';

export const showRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const isValid = (input) => ['yes', 'no'].includes(input);

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

export const getTask = () => getRandomInt(0, 100);

export const getCorrectAnswer = (task) => isPrime(Number(task)) ? 'yes' : 'no';
