const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a non-negative integer: ', (answer) => {
  const num = parseInt(answer);

  const result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);

  rl.close();
});

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}