"use strict";
function addition(x, y) {
    return x + y;
}
let q1 = addition(12, 3);
console.log(q1);
//program 2
let canDrive;
let age = 18;
if (age > 18) {
    canDrive = true;
}
else {
    canDrive = false;
}
console.log(canDrive);
//object 
let studentA = {
    firstName: 'Ajit',
    lastName: 'Gode'
};
//console.log(studentA)
let studentB;
studentB = {
    firstName: 'Ajit',
    lastName: 'Gode',
    age: 23
};
console.log(studentB);
//Array
let city = [];
city.push('pune');
city.push('nashik');
city.push('mumbai');
//console.log(city)
city.forEach((el) => {
    console.log(el.toUpperCase());
});
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach((el) => {
    console.log(el);
});
// Array of fixed length ===tuple 
let names;
names = ['Ajit', 'Gode', 23];
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["supervisor"] = 1] = "supervisor";
    Roles[Roles["sr_supervisor"] = 2] = "sr_supervisor";
    Roles[Roles["manager"] = 3] = "manager";
    Roles[Roles["HR"] = 4] = "HR";
})(Roles || (Roles = {}));
if (Roles.HR) {
    console.log('HR');
}
