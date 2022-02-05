let singleDigitNumber = (Math.floor(Math.random()*10)%7)+1;
 console.log(singleDigitNumber);
  if(singleDigitNumber == 1)
{
    console.log("Monday");
}
else if(singleDigitNumber == 2)
{
    console.log("Tuesday");
}
else if(singleDigitNumber == 3)
{
    console.log("Wednesday");
}
else if(singleDigitNumber == 4)
{
    console.log("Thursday");
}
else if(singleDigitNumber == 5)
{
    console.log("Friday");
}
else if(singleDigitNumber == 6)
{
    console.log("Saturday");
}
else if(singleDigitNumber == 7)
{
    console.log("Sunday");
}
else{
    console.log("wrong number");
}