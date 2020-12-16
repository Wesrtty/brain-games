import * as brainEven from './games/even.js';
import * as brainCalc from './games/calc.js';
import * as brainGcd from './games/gcd.js';
import * as brainProgression from './games/progression.js';
import * as brainPrime from './games/prime.js';
import setUserName from './games/cli.js';

export default (gameName) => {
    const game = getModuleByGameName(gameName);
    const username = setUserName();
    const attemptsCount = 3;

    const rulesGame = game.getRules();
    console.log(rulesGame);

    for (let attempt = 0; attempt < attemptsCount; attempt += 1) {
        const [ correctAnswer, incorrectAnswer, resultGame ] = game.run();
        if (!isVictory(resultGame)) {
            console.log(`'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${username}!`);
};

const isVictory = (resultGame) => (resultGame);

const getModuleByGameName = (gameName) => {
    switch (gameName) {
        case 'brain-even':
            return brainEven;
        case 'brain-calc':
            return brainCalc;
        case 'brain-gcd':
            return brainGcd;
        case 'brain-progression':
            return brainProgression
        case 'brain-prime':
            return brainPrime;
        default:
            console.log(`${gameName} is not found.`);
    }
};