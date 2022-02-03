const prompt = require("prompt-sync")();
console.log("Think about a number in your mmind and we will guess that");
let max = 100
let min= 0
let mid = 0
while (min <= max -1 ) {
    let mid = Math.round((min+max)/2)
    let choice = prompt(`Numberis less than ${mid} y/n :`)
    if (choice == "y") {
        max = mid
    }
    else{
        min = mid
    }
}
console.log("Your magic number is "+min);