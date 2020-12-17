import { showQuestion, setUserInput } from '../../utils/interaction.js';
import { getRandomInt, isInt } from "../../utils/utils.js";

export const run = () => {
    let resultGame = true;
    const numbers = generateNumbers(7);
    const [ hiddenNumber, numbersWithHiddenNumber ] = hideRandomNumber(numbers);

    showQuestion(numbersWithHiddenNumber);
    const input = Number(setUserInput());

    if (!isInt(input) || input !== hiddenNumber) {
        resultGame = false;
    }
    return [ hiddenNumber, input, resultGame ];
};

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
}

const hideRandomNumber = (numbers) => {
    const empty = '..';
    const randomIndex = getRandomInt(numbers.length - 1);
    const hiddenNumber = numbers[randomIndex];

    numbers[randomIndex] = empty;
    return [ hiddenNumber, numbers ];
};
