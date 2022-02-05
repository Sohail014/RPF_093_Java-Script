let numArray = new Array()
for(let count = 0 ; count <10 ; count++)
{
    let randomNumber =(Math.floor(Math.random() * 100) % 900) + 100
    numArray.push(randomNumber)
}
console.log("The Generated numbers are "+numArray);
let min = 1000
let max = 0
let secondMin = 1000
let secondMax = 0
for (number in numArray)
{
    if (numArray[number]> max) {
        secondMax = max
        max = numArray[number]
    }
    else if (numArray[number] > secondMax) 
    {
        secondMax = numArray[number]
    }
    else if (numArray[number] < min) 
    {
        secondMin = min
        min = numArray[number]
    }
    else if (numArray[number] < secondMin)
    {
        secondMin = numArray[number]
    }
}
console.log(`The 2nd maximum value is ${secondMax}`);
console.log(`The 2nd minimum value is ${secondMin}`);