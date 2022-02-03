const prompt  =  require("prompt-sync")()
function degCToDegF(value) {
    if (0 <= value && value <= 100) {
        return ((value*9/5) +32)
    } else {
        return "Wrong input"
    }
}

function degFToDegC(value) {
    if (32 <= value && value <= 212) {
        return ((value-32) * 5/9)
    } else {
        return "Wrong input"
    }
}

let conversion = prompt("Enter the conversion you have to perform 1) degC to degF 2) degF to defC ")
let value = prompt("Enter the value to convert ")
if (conversion == "1") {
    console.log("Result : "+degCToDegF(value))
} else if (conversion == "2"){
    console.log("Result : "+degFToDegC(value));
}
else{
    console.log("Invalid input");
}