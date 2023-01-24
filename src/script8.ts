
//program 1
interface Save {
    accountNumber(): number
    checkBank(): number
    checkSInterest(): number
}
interface Loan {
    checkLInterest(): number
}
interface Current {
    checkLimit(): number
}

class SBIC implements Save, Loan, Current {
    accountNumber(): number {
        return 30
    }
    checkBank(): number {
        return 25
    }
    checkSInterest(): number {
        return 43
    }
    checkLInterest(): number {
        return 84
    }
    checkLimit(): number {
        return 63
    }
}

let  S1 = new SBIC()
S1.accountNumber()
S1.checkBank()
S1.checkLInterest()
S1.checkLimit()
S1.checkSInterest()

class PNBP implements Current ,Save {
    accountNumber(): number {
        return 99
    }
    checkBank(): number {
        return 25
    }
    checkSInterest(): number {
        return 84
    }
    checkLimit(): number {
        return 10
    }
}

let  S2 = new PNBP()
S2.accountNumber()
S2.checkBank()


// program 2
interface Citizen {
    adharCard:number
}

class GrandFather implements Citizen{
    firstName:string
    lastName:string
    adharCard:number
    constructor(fn:string , ln:string ,adharCard:number){
        this.firstName = fn
        this.lastName = ln
        this.adharCard = adharCard  
    }
}

class Father extends GrandFather {
    constructor(fn:string ,ln:string,adharCard:number){
        super(fn,ln,adharCard)
    }
}

let vaibhav = new Father("vaibhav","gode",876)
console.log(vaibhav.adharCard)
console.log(vaibhav.firstName)
console.log(vaibhav.lastName)