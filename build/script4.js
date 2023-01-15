"use strict";
let Ajit = {
    firstName: "Ajit",
    lastName: "Gode"
};
let Sanket = {
    firstName: "Sanket",
    lastName: "Modhe"
};
let Audi = {
    modelNumber: 2543,
    color: 'Red',
    type: '1st class'
};
let s = {
    firstName: "Mayuri",
    lastName: 'Gode'
};
//unions 
function printAddress(code) {
    console.log(`My address is ${code}`);
    console.log(code);
}
printAddress(12);
printAddress('12');
let account;
account = "current";
// functions 
function getName() {
    console.log("Ajit Gode");
}
getName();
function givString() {
    return "Hello";
}
givString();
function canDriveA() {
    return true;
}
canDriveA();
