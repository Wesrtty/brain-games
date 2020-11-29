#!/usr/bin/env node
import { inputUserName, showGreeting, showGreetingByUserName } from '../src/cli.js';
import evenOrOdd from '../src/even.js';

showGreeting();
const userName = inputUserName();
showGreetingByUserName(userName);

const result = evenOrOdd();
if (result) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
  console.log(`Let\'s try again, ${userName}!`);
}
