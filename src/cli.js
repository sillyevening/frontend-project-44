import readlineSync from '../readline-sync/lib/readline-sync.js';
console.log('Welcome to the Brain Games!');
console.log('May i have your name?');
const name = readlineSync.question('Your name: ')
console.log('Hello,'+name+'!');

export {name} ;