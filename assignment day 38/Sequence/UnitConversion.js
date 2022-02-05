console.log("Convert 42 inches in ft");
console.log("1 ft = 12 inches");
let valueInFeet = 42 / 12;
console.log("42 inches in feet: " + valueInFeet + " ft");

console.log("Convert Area in meter square");
let rectangleArea = 60 * 40;
console.log("Area of Plot in feet: " + rectangleArea + "ft");

console.log("1 ft = 0.3048 meter");
let rectangleAreaInMeter = rectangleArea * 0.3048;
console.log("Area of plot in meter square: " + rectangleAreaInMeter + " square meters");

console.log("Calculate Area of 25 such Plots");
let totalAreaInFeet = rectangleArea * 25;
console.log("Area of 25 Plot in feet: " + totalAreaInFeet + " ft");

let totalAreaInMeters = rectangleAreaInMeter * 25;
console.log("Area of 25 Plot in meter square: " + totalAreaInMeters + " square meters");