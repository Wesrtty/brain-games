import readlineSync from "readline-sync";

export const showQuestion = (question) => console.log(`Question: ${question}`);

export const setUserInput = () => readlineSync.question('Your answer: ');