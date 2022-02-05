let count = 0;
let number =252;
while(number != 0)
{
    number = Math.floor(number/10);
    count++;
}
if(count == 1)
{
    console.log("Unit");
}
else if(count == 2)
{
    console.log("Ten");
}
else if(count == 3)
{
    console.log("Hundred");
}
else if(count == 4)
{
    console.log("Thousand");
}
else if(count == 5)
{
    console.log("Lakh");
}
else
{
    console.log("Out of Bounds");
}