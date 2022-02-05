const prompt = require("prompt-sync")();
let numbers = prompt("Enter a number till you have to check ");
for (let number = 0 ; number <= numbers ; number++) 
{
    let numNotPrime = 0
    for (let count = 2; count <number ; count++) {
        if (number % count  == 0) {
            numNotPrime++
            break;
        }
    }
    if (numNotPrime) {
        console.log(number +" is not prime");
    } else {
        console.log(number +" is prime");
    }
   
}