let prompt = require("prompt-sync")();

let nameRegex = new RegExp("^([A-z][a-z]*){3,}")
let addressCityStateRegex =  new RegExp("^[a-z]{4,}")
let pincodeRegex =  new RegExp("^[0-9\\s]{6,7}$");
let emialRegex = new RegExp("^abc[-.+]*[0-9]*@[a-z]*[.a-z][.a-z]*")

let contacts = new Array();

class person{
    firstName ;
    lastName;
    address;
    city ;
    stste;
    zip;
    phone;
    emial;

    constructor(firstName,lastName,address,city,state,zip,phone,emial){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address =address;
        this.city = city;
        this.stste = state;
        this.zip = zip;
        this.phone = phone;
        this.emial = emial;
    
    }
}

function addContactIntoarray() {
    firstName =  prompt("enter first name => ");
    if (!nameRegex.test(firstName)){
        throw "name dose not matched"
    }
    lastName  = prompt("enter last name => ");
    if (!nameRegex.test(lastName)){
        throw "name dose not matched"
    }

    address = prompt("enter address => ");
    city = prompt("enter city => ");
    stste = prompt("enter state");
    if (!addressCityStateRegex.test(address) || !addressCityStateRegex.test(city) || !addressCityStateRegex.test(city)){
        throw "address or city or state dose not matched"
    }
    zip = prompt("enter zip code => ");
    phone  = prompt ("enter phone number => ")
    emial = prompt("enter email => ");
    if (! pincodeRegex.test(zip) || emialRegex.test(emial)){
        throw "email or pincode dose not matched"
    }

    contacts.push(new person( firstName,lastName,address,city,stste,zip,phone,emial));
}

let addContact = addContactIntoarray();
console.log(contacts);

// *********************************************ability to find person using there name***************************

let findByName = prompt("enter name => ")
let changeName = prompt("Enter new name to be changed with old hre => ")
let personFoundByName = contacts.filter(element => element.firstName == findByName);
personFoundByName.findByName = changeName;


// *********************************************ability to find person using there name & delete***************************
let findByName = prompt("enter perosn name to delete => ")
let personFoundByName = contacts.filter(element => element.firstName == findByName);
delete personFoundByName;


// *********************************************ability to get total person in contact list***************************

function countNumber (totalPerosn, currentPerson){
    return totalPerosn+currentPerson;
}
let contactCount =  contacts.forEach(element).reduce(countNumber, 0 );
console.log("the total person in list is = "+ contactCount);

// *********************************************ability to search person in city or state***************************

let inputCity = prompt("enter city => ");
let inputState = prompt ("enter state => ");

let seachArray = contacts.filter(element => element.city == inputCity || element.state == inputState);
console.log("the person from city or state are => " + seachArray);

// *********************************************ability to get number of contacts form city or state***************************

let cityStateCount = seachArray.forEach(element).reduce(countNumber,0);
console.log("the number of personn from given city or state are => "+ cityStateCount);

// *********************************************ability to sort list by name ***************************

contacts.sort(function (a,b){
    var nameA = a.firstName.toUpperCase(); 
  var nameB = b.firstName.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

console.log(contacts);

// *********************************************ability to sort list by zipCode  ***************************
contacts.sort(function(a,b){
    return a.zip - b.zip;
});
console.log(contacts);