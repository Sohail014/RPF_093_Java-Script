let feetToInch = 12;
let inchToFeet = 1/12;
let meterToFeet = 3.28;
let feetToMeter = 1/3.28;

let area = 100;
let conversion = "meterToFeet";
switch(conversion) 
{
case "feetToInch" :
    console.log("Area in inch : "+(area*feetToInch));
    break;
    case "inchToFeet" :
    console.log("Area in feet : "+(area*inchToFeet));
    break;
    case "feetToMeter" :
    console.log("Area in Meter : "+(area*feetToMeter));
    break;
    case "meterToFeet" :
    console.log("Area in feet : "+(area*meterToFeet));
    break;
    default:
        console.log("invalid conversion");
}