import * as brainEven from './even.js';
import * as brainCalc from './calc.js';
import * as brainGcd from './gcd.js';
import * as brainProgression from './progression.js';
import * as brainPrime from './prime.js';
import getUserName from './cli.js';

const getGameByName = (gameName) => {
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

const run = (gameName) => {
    const game = getGameByName(gameName);
    const userName = getUserName();
    const attempts = 3;

    game.showGreeting();

    for (let attempt = 0; attempt < attempts; attempt += 1) {
        const [ correct, incorrect, result ] = game.start();

        if (!result) {
            console.log(`'${incorrect}' is wrong answer ;(. Correct answer was '${correct}'.`);
            return;
        }
        console.log('Correct!');
    }

    console.log(`Congratulations, ${userName}!`);
};

export default run;