let a= 10;
let b= 2000;
let c= 5;

arithmetic1= a+b*c ;
arithmetic2= c+a/b ;
arithmetic3= a%b+c ;
arithmetic4= a*b+c ;

let max =arithmetic1;
if(max<arithmetic2)
max =arithmetic2;
if(max<arithmetic3)
max=arithmetic3;
if(max<arithmetic4)
max =arithmetic4;

let min = arithmetic1;
if(min>arithmetic2)
min =arithmetic2;
if(min>arithmetic3)
min=arithmetic3;
if(min>arithmetic4)
min =arithmetic4;

console.log("Maximum value ="+max);
console.log("Manimum value ="+min);