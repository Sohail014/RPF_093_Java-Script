const prompt = require("prompt-sync")();
let number = prompt("Enter a number ");
let power = 1
while (power < number && power <= 8) {
    console.log(2**power);
    power++
}