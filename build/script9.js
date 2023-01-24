"use strict";
// class 1 
// class vehicle  {
//     color:string = "Blue"
//     model:number = 123
//     display(){
//         console.log(this.color)
//     }
// }
// let audi = new vehicle()
// audi.color
// audi.model
// audi.display()
// program 2 
class Vehicle {
    constructor(model, type, color) {
        this.model = model;
        this.type = type;
        this.color = color;
    }
    display() {
        console.log(this.color);
    }
}
let bmw = new Vehicle(123, "Class A", "Blue");
bmw.model;
bmw.display();
// program 3 
class Vehicle1 {
    constructor(model, type, color) {
        this.model = model;
        this.type = type;
        this.color = color;
    }
    display() {
        console.log(this.color);
    }
}
let bmw2 = new Vehicle1(123, "Class B", "Black");
console.log(bmw2.color);
// program 4 
class Vehicle3 {
    static displayCountry() {
        console.log(Vehicle3.country);
    }
    display() {
        console.log("Ajit Gode");
    }
}
Vehicle3.country = "India";
Vehicle3.displayCountry();
console.log(Vehicle3.country);
let Q1 = new Vehicle3();
console.log(Q1);
// private 
class student {
    constructor(fn, ag, sks) {
        this.fullName = fn;
        this.age = ag;
        this.skill = sks;
    }
    getFullName() {
        return this.fullName;
    }
    getAge() {
        return this.age;
    }
    getSkill() {
        return this.skill;
    }
}
let Q2 = new student("Ajit", 34, ["js"]);
Q2.getAge();
// program 6 --- readonly
class Student {
    constructor(fn, ag, sks) {
        this.fullName = fn;
        this.age = ag;
        this.skill = sks;
    }
    setFullName(n) {
        // this.fullName = n
    }
}
