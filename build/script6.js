"use strict";
// program 1 
class Person {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        console.log(this.name);
    }
}
let A1 = new Person("Ajit");
console.log(A1.name);
A1.displayName();
// Access modifer
//Public private protected 
// program 2 ---  Public 
class PersonA {
    constructor(nam) {
        this.name = nam;
    }
    displayName() {
        console.log(this.name);
    }
}
let A2 = new PersonA('Akash');
console.log(A2.name);
A2.displayName();
//program 3 --- protected 
// private method and property cannot be access outside class
class PersonQ {
    constructor(nam) {
        this.name = nam;
    }
    displayName() {
        console.log(this.name);
        this.getName();
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
}
let A3 = new PersonQ('Sanket');
console.log();
A3.getName();
// program 4
class PersonS {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
// program 5 -- readOnly
class PersonG {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        console.log(this.name);
    }
}
let A4 = new PersonG('Amol');
console.log(A4.name);
class SBI {
    loan() {
        return 10;
    }
    save() {
        return 11;
    }
}
class PNB {
    loan() {
        return 22;
    }
    save() {
        return 33;
    }
}
let SBIPUNE = new SBI();
console.log(SBIPUNE.loan());
