// UC1 - Read a single digit number and write the number in word
random = Math.floor(Math.random()*10);
console.log("Random is: "+random);
switch(random)
{
    case 0:
            console.log("Zero");
            break;
    case 1:
            console.log("One");
            break;
    case 2:
            console.log("Two");
            break;
    case 3:
            console.log("Three");
            break;
    case 4:
            console.log("Four");
            break;
    case 5:
            console.log("Five");
            break;
    case 6:
            console.log("Six");
            break;
    case 7:
            console.log("Seven");
            break;
    case 8:
            console.log("Eight");
            break;
    default:
            console.log("Nine");
            break;

}



//UC2 - Read a Number and Display the week day (Sunday, Monday,...)
let day = Math.floor(Math.random()*7)+1;
console.log(day);
switch(day)
{
    case 1 :
        console.log("day : "+"Monday ");
        break;
    case 2 :
        console.log("day : "+"Tuesday ");
         break;
    case 3 :
        console.log("day : "+"Wednesday ");
        break;
    case 4 :
        console.log("day : "+"Thursday ");
         break;
    case 5 :
        console.log("day : "+"Friday ");
        break;
    case 6 :
        console.log("day : "+"Saturday ");
        break; 
    default :
        console.log("day : "+"Sunday ");
        break; 
}


//UC3 -  Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred.
let num = (Math.floor(Math.random()*1000)%1000)+1;
console.log("Number is: "+num);
let choice;
if(num >=0 && num <=9) 
choice = 1;
else if( num>=10 && num<=99) 
choice = 2;
else if(num >=100 && num <=999)
choice = 3;
else
choice = 4;
switch (choice)
{
    case 1:
        console.log("The number is in: UNITS");
        break;
    case 2:
        console.log("The number is in: TENS");
        break;
    case 3:
        console.log("The number is in: HUNDERDS");
        break;
    default:
        console.log("The number is in: THOUSANDS");
        break
}



//UC4 - Unit Conversion

const onefeet_inch = 12;
const oneinch_feet = 0.083;
const onefeet_meter = 0.3048;
const onemeter_feet = 3.28084;

console.log("feet to inch : "+ 10 * onefeet_inch);
console.log("inch to feet : "+10 * oneinch_feet);
console.log("feet to meter : "+10 * onefeet_meter);
console.log("meter to feet : "+10 * onemeter_feet);