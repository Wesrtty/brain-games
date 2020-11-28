import readlineSync from 'readline-sync';

export const setUserName = () => {
    return  readlineSync.question('May I have your name? ');
}
