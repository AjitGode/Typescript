// program 1 

interface worldBank{
    loan():number
    save():number 
}

class SBIa implements worldBank{

    public loan():  number {
        return 10
    }
    
    public save(): number {
        return 10
    }
}

class PNBa implements worldBank{
    public loan():  number {
        return 100
    }
    
    public save(): number {
        return 200
    }
}


let Pune = new SBIa() 
Pune.loan()
Pune.save()


// program 2 

interface student {
    Result():number
}

interface teacher{
    info():string
}

//  class Sumedh implements student,teacher{
//     Result(): number {
//         return 70
//     }
//     info(): string {
//         return "Summedh"
//     }
//  }

//  class pradip implements teacher{
//     info(): string {
//         return "Pradip"
//     }
//  }

//  let C1 = new Sumedh()
//  C1.Result()
//  C1.info()

//  let C2 = new pradip()
//  C2.info()


 // program 3  -- extend

//  interface worldBankB{
//     getCode():number
//  }


//  class RBI implements worldBankB{
//        getCode():number{
//         return 20
//     }
//  }
 

//  class PNBc extends RBI {
//     loan():number{
//         return 10000
//     }

//     save():number{
//         return 20
//     }
//  }

 //let mumbai = new PNBc()
 //console.log(mumbai.getCode());


 //program 4 --overriding 
// same method name , same signature , differnt class
 interface worldBankB{
    getCode():number
 }


 class RBI implements worldBankB{
       getCode():number{
        return 20
    }
 }
 

 class PNBc extends RBI {
    loan():number{
        return 10000
    }

    save():number{
        return 20
    }
    getCode(): number {
        return 3000
    }
 }

 let Nashik = new PNBc()
 console.log(Nashik.getCode())


 // program 5 -- Abstract class 

 // we can not create object from abstract class

 abstract class RBIIndia{
    abstract  loan():number
    abstract  save():number

    country(){
        console.log("india")
    }
 }