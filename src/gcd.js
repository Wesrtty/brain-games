import readlineSync from "readline-sync";
import { getRandomInt, isInt } from './../utils/utils.js';

const getGcd = (num1, num2) => {
    let count = 2;

    while (count <= (num1 + num2) / 2) {
        if (num1 % count === 0 && num2 % count === 0) {
            return count;
        }
        count++;
    }

    return 1;
};

export const showGreeting = () => console.log('Find the greatest common divisor of given numbers.');

export const start = () => {
    let result = true;
    const [ number1, number2 ] = [ getRandomInt(50), getRandomInt(50) ];

    console.log(`Question: ${number1} ${number2}`);
    const input = readlineSync.question('Your answer: ');

    const gcd = getGcd(number1, number2);
    const inputInt = Number(input);

    if (!isInt(inputInt) || inputInt !== gcd) {
        result = false;
    }

    return [gcd, input, result];
};
