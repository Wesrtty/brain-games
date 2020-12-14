import readlineSync from "readline-sync";
import { getRandomInt, isInt } from './../utils/utils.js';

const operations = ['+', '-', '*'];

const getRandomOperation = (operations) => operations[Math.ceil(Math.random() * operations.length - 1)];

const calculate = (number1, operation, number2) => {
    switch (operation) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        default:
            console.log(`${operation} is not found.`);
            return;
    }
};

export const showGreeting = () => console.log('What is the result of the expression?');

export const start = () => {
    let result = true;
    const [ number1, operation, number2 ] = [ getRandomInt(50), getRandomOperation(operations), getRandomInt(50) ];

    console.log(`Question: ${number1} ${operation} ${number2}`);
    const input = readlineSync.question('Your answer: ');

    const resultOperation = calculate(number1, operation, number2);
    const inputInt = Number(input);

    if (!isInt(inputInt) || inputInt !== resultOperation) {
        result = false;
    }

    return [resultOperation, input, result];
};
