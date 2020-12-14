import readlineSync from "readline-sync";

const getRandomInt = () => Math.ceil(Math.random() * Math.floor(100));

const isInputCorrect = (input) => ['yes', 'no'].includes(input);

const isEven = (number) => number % 2 === 0;

const checkUserResponse = (number, input) => isEven(number) === Boolean(input === 'yes' ? 1 : 0);

export const showGreeting = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const start= () => {
  let result = true;
  const number = getRandomInt();

  console.log(`Question: ${number}`);
  const input = readlineSync.question('Your answer: ');

  if (!isInputCorrect(input) || !checkUserResponse(number, input)) {
    result = false;
  }

  return [input === 'yes' ? 'no' : 'yes', input, result];
};
