// UC1 - Read a single digit number and write the number in word
random = Math.floor(Math.random()*10);
console.log("Random is: "+random);
if(random ==0)
console.log("Zero");
else if(random == 1)
console.log("One");
else if(random == 2)
console.log("Two");
else if(random == 3)
console.log("Three");
else if(random == 4)
console.log("Four");
else if(random == 5)
console.log("Five");
else if(random == 6)
console.log("Six");
else if(random == 7)
console.log("Seven");
else if(random == 8)
console.log("Eight");
else
console.log("Nine");

//UC2 - Read a Number and Display the week day (Sunday, Monday,...)
let day = Math.floor(Math.random()*7)+1;
if(day ==1)
console.log("Monday");
else if(day == 2)
console.log("Tuesday");
else if(day == 3)
console.log("Wednesday");
else if(day == 4)
console.log("Thursday");
else if(day == 5)
console.log("Friday");
else if(day == 6)
console.log("Saturday");
else 
console.log("Sunday");

//UC3 -  Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred.
let num = (Math.floor(Math.random()*1000)%1000)+1;
console.log("Number is: "+num);
if(num >=0 && num <=9) 
console.log("The number is in: UNITS")
else if( num>=10 && num<=99) 
console.log("The number is in: TENS");
else if(num >=100 && num <=999)
console.log("The number is in: HUNDERDS");
else
console.log("The number is in: THOUSANDS")

//UC4 - Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
let a= 15;
let b= 37;
let c= 93;
let result_One = a+b*c;
let result_Two = a%b+c;
let result_Three = c+a/b;
let result_Four = a*b+c;
console.log("result_One : "+result_One," result_Two : "+result_Two," result_Three : "+result_Three," result_Four : "+result_Four)
console.log("Max number : "+Math.max(result_One,result_Two,result_Three,result_Four));
console.log("Min number : "+Math.min(result_One,result_Two,result_Three,result_Four));