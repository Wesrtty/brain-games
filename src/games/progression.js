import { showQuestion, setUserInput } from '../../utils/interaction.js';
import { getRandomInt, isInt } from '../../utils/utils.js';

export const getRules = () => 'What number is missing in the progression?';

const generateNumbers = (maxSize = 5) => {
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

const hideRandomNumber = (numbers) => getRandomInt(numbers.length - 1);

export const run = () => {
  let resultGame = true;
  const numbers = generateNumbers(7);

  const indexHiddenNumber = hideRandomNumber(numbers);
  const hiddenNumber = numbers[indexHiddenNumber];
  const numbersWithHiddenNumber = numbers;
  numbersWithHiddenNumber[indexHiddenNumber] = '..';

  showQuestion(numbersWithHiddenNumber.join(' '));
  const inputStr = setUserInput();
  const inputInt = Number(inputStr);

  if (!isInt(inputInt) || inputInt !== hiddenNumber) {
    resultGame = false;
  }
  return [hiddenNumber, inputStr, resultGame];
};
