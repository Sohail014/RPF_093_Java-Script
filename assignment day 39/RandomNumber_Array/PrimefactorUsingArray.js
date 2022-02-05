let factorArray = new Array()
const prompt = require("prompt-sync")();
let number = prompt("Enter a number ");
for (let factor = 2; factor <= number; factor++) {
  let isPrime = 1;
  //checking taken number is prime
  for (let count = 2; count < factor; count++) {
    let remainder = factor % count;
    if (remainder == 0) {
      isPrime--;
      break;
    }
  }
  if (isPrime) {
    //finding the factorial using above prime numbers
    while (number % factor == 0) {
      factorArray.push(factor)
      number = number / factor;
    }
  }
}
console.log("The factors of "+number+" are "+factorArray);