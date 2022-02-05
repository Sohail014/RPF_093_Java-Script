let prompt = require("prompt-sync")();

// ************************************************  pin code UC1 take proper pincode**********************************************

let pincodeRegex =  new RegExp("^[0-9]{6,6}$");
let pincode =  parseInt(prompt("enter number = "));

if (pincodeRegex.test(pincode)){
    console.log("entey matched please go ahead");
}else{
    console.log("please enter proper pincode")
}

// ************************************************  pin code UC2  show erroe when alphabet is entered **********************************************


let pincodeRegex =  new RegExp("^[0-9]{6,6}$");
let pincode =  (prompt("enter number = "));

if (pincodeRegex.test(pincode)){
    console.log("entey matched please go ahead");
}else{
    console.log("please enter proper pincode")
}
//  pin code UC3 Restrict the PIN code from taking alphabets or special characters at the End.Check for 400088B – this should fail **********************************************

let pincodeRegex =  new RegExp("^[0-9]{6,6}$");
let pincode =  (prompt("enter number = "));

if (pincodeRegex.test(pincode)){
    console.log("entey matched please go ahead");
}else{
    console.log("please enter proper pincode")
}

//********************************************Make sure 400 088 is also valid along with 400088 ********************************

let pincodeRegex =  new RegExp("^[0-9\\s]{6,7}$");
let pincode =  (prompt("enter number = "));

if (pincodeRegex.test(pincode)){
    console.log("entey matched please go ahead");
}else{
    console.log("please enter proper pincode")
}


//********************************************validate email of bridge labz********************************

let emailRegex = new RegExp("^abc[._+-]?[a-zA-Z]*@bridgelabz[.]co[.]*[a-z]*$");
let userInput = prompt("Enter email = ");

if (emailRegex.test(userInput)){
    console.log("you entered valid email id ");
}else{
    console.log("you entered  wrong email id ");
}

//********************************************validate multiple other emails********************************

let emialRegex = new RegExp("^abc[-.+]*[0-9]*@[a-z]*[.a-z][.a-z]*")
let userInput = prompt("enter email id here = ");
if (emialRegex.test(userInput)){
    console.log("you entered valid email id ");
}else{
    console.log("you entered  wrong email id ");
}