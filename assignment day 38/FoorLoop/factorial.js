const prompt = require("prompt-sync")();
let number = prompt("Enter a number to find factorial  ");
let factorial = 1
for (let count = 1; count <= number ; count++) {
    factorial *= count
}
console.log("The factorial is "+factorial);