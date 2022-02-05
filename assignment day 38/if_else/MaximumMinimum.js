let maxNumber = 100;
let minNumber = 999;
for(let index = 1; index <= 5; index++){
    let number = generateRandomNumber();
    console.log("Number" + index + " : " + number);
    if(number < minNumber)
        minNumber = number;
    if(number > maxNumber)
        maxNumber = number;
}
function generateRandomNumber(){
    return Math.round(Math.random() * 899 + 100);
}
console.log("Maximum Number = " + maxNumber);
console.log("Minimum Number = " + minNumber);