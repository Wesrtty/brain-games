import { showQuestion, setUserInput } from '../../utils/interaction.js';
import { getRandomInt, isInt } from '../../utils/utils.js';

export const run = () => {
    const operations = [ '+', '-', '*' ];
    let resultGame = true;
    const [ number1, number2 ] = [ getRandomInt(50), getRandomInt(50) ];
    const operation = getRandomOperation(operations);

    showQuestion(`${number1} ${operation} ${number2}`);
    const input = Number(setUserInput());
    const resultMathOperation = getResultMathOperaion(number1, number2, operation);

    if (!isInt(input) || input !== resultMathOperation) {
        resultGame = false;
    }

    return [ resultMathOperation, input, resultGame ];
};

export const getRules = () => 'What is the result of the expression?';

const getRandomOperation = (operations) => operations[Math.ceil(Math.random() * operations.length - 1)];

const getResultMathOperaion = (number1, number2, operation) => {
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