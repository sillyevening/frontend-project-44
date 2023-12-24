#!/usr/bin/env node
import {readlineSync} from '../src/cli.js';
console.log('Welcome to the Brain Games!');
console.log('May i have your name?');
let name = readlineSync.question('Your name: ')
console.log('Hello,'+name+'!');


