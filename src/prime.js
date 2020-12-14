import readlineSync from "readline-sync";
import { getRandomInt, isInt } from './../utils/utils.js';

const isPrime = (num) => {
    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

export const showGreeting = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const start = () => {
    let result = true;
    const number = getRandomInt(50);

    console.log(`Question: ${number}`);
    const input = readlineSync.question('Your answer: ');

    if (isPrime(number) !== Boolean(input === 'yes' ? 1 : 0)) {
        result = false;
    }
    return [input === 'yes' ? 'no' : 'yes', input, result];
};
