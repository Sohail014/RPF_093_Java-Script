let sum = 0;
for(index = 1 ; index <=5 ; index++){
    let number = generateRandomNumber
    console.log("Number" + index + " = " + number);
    sum += number;
}
function generateRandomNumber(){
    return Math.round(Math.random() * 89 + 10);
}
console.log("Sum = " + sum);
console.log("Average = " + sum/5);