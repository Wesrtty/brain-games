import readlineSync from "readline-sync";

const operations = ['+', '-', '*'];

const getRandomInt = () => Math.ceil(Math.random() * Math.floor(50));

const getRandomOperation = (operations) => operations[Math.ceil(Math.random() * operations.length - 1)];

const isInputCorrect = (input) => typeof input === 'number';

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

export const startGame = () => {
    let result = true;
    const [ number1, operation, number2 ] = [ getRandomInt(), getRandomOperation(operations), getRandomInt() ];

    console.log(`Question: ${number1} ${operation} ${number2}`);
    const input = readlineSync.question('Your answer: ');

    const resultOperation = calculate(number1, operation, number2);

    if (!isInputCorrect(Number(input)) || Number(input) !== resultOperation) {
        result = false;
    }

    return [resultOperation, input, result];
};
