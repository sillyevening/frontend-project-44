import readlineSync from 'readline-sync';

export default function cli() {
  console.log('Welcome to the Brain Games!');
  console.log('May i have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
}
