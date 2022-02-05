let count = 0;
let number = 2146;
while (number != 0) {
    number = Math.floor(number / 10);
    count++;
}
switch (count) {
    case 1:
        console.log("Unit");
        break;
    case 2:
        console.log("Ten");
        break;
    case 3:
        console.log("Hundred");
        break;
    case 4:
        console.log("Thousand");
        break;
    case 5:
        console.log("Lakh");
        break;
    default:
        console.log("Out of Bounds");
}