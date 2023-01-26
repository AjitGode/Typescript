"use strict";
// interface 
class PersonX {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    greet(word) {
        console.log(`welcome ${word}`);
    }
    display(year) {
        console.log(`welcome ${year}`);
    }
}
let pravin = new PersonX("Ajit", "1999");
pravin.greet("Ajit");
let h1 = {
    name: "Ajit",
    roles: ["admin", "customer", "operators"],
    startDate: new Date()
};
let s1 = true;
// function add(a:any,b:any){
//     return a + b
// }
function add(a, b) {
    if (typeof a == 'string' && typeof b === 'string') {
        return a + b;
    }
    if (typeof a == 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a == 'number' && typeof b === 'string') {
        return a.toString() + b;
    }
    if (typeof a == 'string' && typeof b === 'number') {
        return a + b.toString();
    }
}
console.log(add(1, 5));
console.log(add(1, '5'));
console.log(add('1', '5'));
console.log(add('1', 5));
