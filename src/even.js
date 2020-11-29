import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * Math.floor(100));

const isEven = (number) => number % 2 === 0;

const setAnswer = () => readlineSync.question('Your answer: ');

export default () => {
  const correctAnswerToWin = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let attempt = 1; attempt <= correctAnswerToWin; attempt += 1) {
    const randomNumber = getRandomInt();

    console.log(`Question: ${randomNumber}`);
    const answer = String(setAnswer());

    if (!['yes', 'no'].includes(answer)) {
      return false;
    }

    if (isEven(randomNumber) === Boolean(answer === 'yes' ? 1 : 0)) {
      console.log('Correct!');
    } else {
      return false;
    }
  }

  return true;
};
