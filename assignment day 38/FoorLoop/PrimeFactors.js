const prompt = require("prompt-sync")();
let number = prompt("Enter a number ");
console.log("The Factorial are")

for (let i = 2; i <= number; i++) {
  let isPrime = 1;
  //checking taken number is 5prime
  for (let j = 2; j < i; j++) {
    let remainder = i % j;
    if (remainder == 0) {
      isPrime--;
      break;
    }
  }
  if (isPrime) {
    //finding the factorial using above prime numbers
    while (number % i == 0) {
      console.log(i);
      number = number / i;
    }
  }
}