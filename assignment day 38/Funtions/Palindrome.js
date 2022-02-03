const prompt = require("prompt-sync")()
function checkPalindrome(number) {
    let temp = number
    let reverse = 0
    while (number > 0) {
       let remainder =Math.round(number%10)
        reverse = (reverse*10) + remainder
        number = Math.round(number/10)
    }
    if (temp == reverse) {
        console.log("Number is palindrome");
    } else {
        console.log("Number is not palindrome");
    }
}
let number1 = prompt("Enter the 1st number ")
let number2 = prompt("Enter the 2nd number ")

checkPalindrome(number1)
checkPalindrome(number2)