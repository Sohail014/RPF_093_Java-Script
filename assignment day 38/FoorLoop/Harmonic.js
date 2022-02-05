const prompt = require("prompt-sync")();
let number = prompt("Enter a number ");
let harmonic = 0
for (let n = 1; n <= number ; n++) {
    harmonic += 1/n
}
console.log("Required harmonic numbar is "+harmonic);