"use strict";
// program 1 
class SBIa {
    loan() {
        return 10;
    }
    save() {
        return 10;
    }
}
class PNBa {
    loan() {
        return 100;
    }
    save() {
        return 200;
    }
}
let Pune = new SBIa();
Pune.loan();
Pune.save();
class RBI {
    getCode() {
        return 20;
    }
}
class PNBc extends RBI {
    loan() {
        return 10000;
    }
    save() {
        return 20;
    }
    getCode() {
        return 3000;
    }
}
let Nashik = new PNBc();
console.log(Nashik.getCode());
// program 5 -- Abstract class 
// we can not create object from abstract class
class RBIIndia {
    country() {
        console.log("india");
    }
}
