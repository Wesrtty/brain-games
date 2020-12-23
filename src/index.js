import readlineSync from 'readline-sync';

const attemptsCount = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  game.showRules();

  for (let attempt = 0; attempt < attemptsCount; attempt += 1) {
    const task = game.getTask();
    const correctAnswer = game.getCorrectAnswer(task);

    console.log(`Question: ${task}`);
    const userResponse = readlineSync.question('Your answer: ');

    if (userResponse !== correctAnswer) {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};
