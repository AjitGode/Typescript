"use strict";
class SBIC {
    accountNumber() {
        return 30;
    }
    checkBank() {
        return 25;
    }
    checkSInterest() {
        return 43;
    }
    checkLInterest() {
        return 84;
    }
    checkLimit() {
        return 63;
    }
}
let S1 = new SBIC();
S1.accountNumber();
S1.checkBank();
S1.checkLInterest();
S1.checkLimit();
S1.checkSInterest();
class PNBP {
    accountNumber() {
        return 99;
    }
    checkBank() {
        return 25;
    }
    checkSInterest() {
        return 84;
    }
    checkLimit() {
        return 10;
    }
}
let S2 = new PNBP();
S2.accountNumber();
S2.checkBank();
class GrandFather {
    constructor(fn, ln, adharCard) {
        this.firstName = fn;
        this.lastName = ln;
        this.adharCard = adharCard;
    }
}
class Father extends GrandFather {
    constructor(fn, ln, adharCard) {
        super(fn, ln, adharCard);
    }
}
let vaibhav = new Father("vaibhav", "gode", 876);
console.log(vaibhav.adharCard);
console.log(vaibhav.firstName);
console.log(vaibhav.lastName);
