"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
        this.width = width;
    }
    getExtendedValues() {
        console.log(this.height);
    }
}
// polymorphism (overloading and overriding)
class PersonM {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayName() {
        return this.firstName + " " + this.lastName;
    }
}
class PersonCa extends PersonM {
    displayName() {
        return "Hello";
    }
}
let Va = new PersonCa("Ajit", "Gode");
Va.displayName();
// abstraction ---we cannot create object for abstract class
class Human {
    displayCountryName() {
        return "India";
    }
}
class PersonL extends Human {
    displayName() {
        return "Ajit Gode";
    }
    displayCity() {
        return "Pune";
    }
}
let AjitF = new PersonL();
AjitF.displayCity();
AjitF.displayCountryName();
AjitF.displayName();
