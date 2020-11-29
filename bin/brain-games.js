#!/usr/bin/env node
import { inputUserName, showGreeting, showGreetingByUserName } from '../src/cli.js';

showGreeting();
showGreetingByUserName(inputUserName());
