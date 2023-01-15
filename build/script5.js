"use strict";
class PersonC {
    constructor(msg) {
        this.greeting = msg;
    }
    greet() {
        return this.greeting;
    }
}
let pro = new PersonC('Hello');
console.log(pro.greeting);
console.log(pro.greet());
//program 2
//private and public method
class PersonD {
    constructor(name) {
        this.name = name;
    }
    getName() {
        this.getGreet();
        return this.name;
    }
    getGreet() {
        console.log('Ajit');
    }
}
let Ajitg = new PersonD('Akshay');
let a1 = Ajitg.getName();
console.log(a1);
// program 3 
class PersonE {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let ajit = new PersonE('Ajit');
console.log(ajit.getName());
// program 4 
class PersonF {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let ajit1 = new PersonF("Sanket");
console.log(ajit1.getName());
