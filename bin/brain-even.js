import readlineSync from 'readline-sync';

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export default function brainEven() {
  console.log('Welcome to the Brain Games!');
  console.log('May i have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;
  while (count < 3) {
    const randomNumber = randomInteger(1, 20);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes') {
      if (randomNumber % 2 === 0) {
        console.log('Correct!');
        count += 1;
      } else {
        console.log(`Let's try again,${name}!`);
      }
    } else if (answer === 'no') {
      if (randomNumber % 2 !== 0) {
        console.log('Correct!');
        count += 1;
      } else {
        console.log(`Let's try again,${name}!`);
      }
    } else {
      console.log(`Let's try again,${name}!`);
    }
  }
  console.log(`Congratulations,${name}!`);
}
brainEven();
