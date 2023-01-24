"use strict";
// inheritance 
class GrandFatherA {
    constructor() {
        this.gFirstName = "Shankar";
        this.glastName = "Gode";
    }
    displayName() {
        console.log(this.gFirstName + "" + this.glastName);
    }
}
class FatherA extends GrandFatherA {
    constructor() {
        super(...arguments);
        this.fName = "Govind";
    }
    displayFname() {
        console.log(this.fName + " " + this.glastName);
    }
}
class SonA extends FatherA {
    constructor() {
        super(...arguments);
        this.sName = "Ajit";
    }
    displaySname() {
        console.log(this.sName + " " + this.glastName);
    }
}
let AjitG = new SonA();
AjitG.gFirstName;
AjitG.displayFname();
AjitG.displayName();
AjitG.displaySname();
// program 2 using constructor 
class GrandFatherB {
    constructor(gfirstName, gLastName) {
        this.gfirstName = gfirstName;
        this.gLastName = gLastName;
    }
    displayGname() {
        console.log(this.gfirstName + " " + this.gLastName);
    }
}
class FatherB extends GrandFatherB {
    constructor(gfirstName, gLastName, Fname) {
        super(gfirstName, gLastName);
        this.Fname = Fname;
    }
    displayFname() {
        console.log(this.Fname + " " + this.gLastName);
    }
}
class SonB extends FatherB {
    constructor(gfirstName, gLastName, Fname, sName) {
        super(gfirstName, gLastName, Fname);
        this.sName = sName;
    }
    displaySname() {
        console.log(this.sName + " " + this.gLastName);
    }
}
let Ajit3 = new SonB("Shankar", "Gode", "Govind", "Ajit");
Ajit3.displayGname();
Ajit3.displayFname();
Ajit3.displaySname();
// program 3 -- one patent 2 child
class FatherC {
    constructor(FName, FLname) {
        this.FName = FName;
        this.FLname = FLname;
    }
    displayfName() {
        console.log(this.FLname + " " + this.FLname);
    }
}
class SonC extends FatherC {
    constructor(FName, FLname, SName) {
        super(FName, FLname);
        this.SName = SName;
    }
    displaySName() {
        console.log(this.SName + " " + this.FLname);
    }
}
class DaughterC extends FatherC {
    constructor(FName, FLname, DName) {
        super(FName, FLname);
        this.DName = DName;
    }
    displayDName() {
        console.log(this.DName + " " + this.FLname);
    }
}
let Ajit4 = new SonC("Govind", "Gode", "Ajit");
let Shrutika = new DaughterC("Govind", "Gode", "Shrutika");
Ajit4.displaySName();
Shrutika.displayDName();
