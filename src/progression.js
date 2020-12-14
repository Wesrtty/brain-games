import readlineSync from "readline-sync";
import { getRandomInt, isInt } from './../utils/utils.js';

const generateNumbers = (maxSize = 5) => {
    const numbers = [];
    const minSize = 5;
    let result = 0;
    const diff = getRandomInt(10);

    for (let index = 0; index < (minSize + maxSize); index += 1) {
        result += diff;
        numbers.push(result);
    }

    return numbers;
}

const hideRandomNumber = (numbers, empty) => {
    const randomIndex = getRandomInt(numbers.length - 1);
    const number = numbers[randomIndex];
    numbers[randomIndex] = empty;
    return [ number, numbers ];
};

export const showGreeting = () => console.log('What number is missing in the progression?');

export const start = () => {
    let result = true;
    const empty = '..';
    const numbers = generateNumbers(7);
    const [ correctNumber, hideNumberWithNumbers ] = hideRandomNumber(numbers, empty);

    console.log(`Question: ${hideNumberWithNumbers}`);
    const input = readlineSync.question('Your answer: ');
    const inputInt = Number(input);

    if (!isInt(inputInt) || inputInt !== correctNumber) {
        result = false;
    }
    return [correctNumber, input, result];
};
