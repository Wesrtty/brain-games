import { showQuestion, setUserInput } from '../../utils/interaction.js';
import { getRandomInt } from "../../utils/utils.js";

export const run = () => {
    let resultGame = true;
    const [ number1, number2 ] = [ getRandomInt(50), getRandomInt(50) ];

    showQuestion(`${number1} ${number2}`);
    const input = Number(setUserInput());
    const leastCommonDivisor = getLeastCommonDivisor(number1, number2);

    if (!isInt(input) || input !== leastCommonDivisor) {
        resultGame = false;
    }

    return [leastCommonDivisor, input, resultGame];
};

export const getRules = () => 'Find the greatest common divisor of given numbers.';

const getLeastCommonDivisor = (num1, num2) => {
    let count = 2;
    while (count <= (num1 + num2) / 2) {
        if (num1 % count === 0 && num2 % count === 0) {
            return count;
        }
        count++;
    }
    return 1;
};
