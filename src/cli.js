import readlineSync from 'readline-sync';

export const showGreeting = () => console.log('Welcome to the Brain Games!');

export const showGreetingByUserName = (name = null) => console.log(`Hello, ${name}!`);

export const inputUserName = () => readlineSync.question('May I have your name? ');