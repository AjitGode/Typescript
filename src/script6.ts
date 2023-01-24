// program 1 

class Person {
    name:string
    constructor(nm:string){
        this.name=nm
    }
    displayName(){
        console.log(this.name)
    }
}

let A1 = new Person("Ajit")
console.log(A1.name)
A1.displayName()

// Access modifer

//Public private protected 

// program 2 ---  Public 


class PersonA {
   public name : string
    constructor(nam:string){
        this.name = nam
    }
     public displayName(){
           console.log(this.name)
      }
}

let A2 = new PersonA('Akash')

console.log(A2.name)
A2.displayName()

//program 3 --- protected 
// private method and property cannot be access outside class
class PersonQ{
    private name:string
    constructor(nam:string){
        this.name=nam
    }
    private displayName(){
        console.log(this.name)
        this.getName()
    }
    public getName():string{
        console.log(this.name)
         return this.name
    }

}

let A3 = new PersonQ('Sanket')

console.log()
A3.getName()

// program 4

class PersonS{
    constructor(private name:string){
        this.name = name
    }
}


// program 5 -- readOnly

class PersonG {
    public readonly name:string
    constructor(nm:string){
        this.name = nm
    }
    displayName(){
        console.log(this.name)
    }
}

let A4 = new PersonG('Amol')
console.log(A4.name)
//A4.name = "Akshay" --  in readonly we can not modified the property value we just set the value to the property.


// interface  -- we can define defination and we can not put body in interface

interface worldBank{
    loan():number
    save():number
}

class SBI implements worldBank{

    public loan():number{
        return 10
    }
    public save():number{
        return 11
    }
}

class PNB implements worldBank{
    public loan(): number {
        return 22
    }
    public save(): number {
        return 33
    }
}

let SBIPUNE = new SBI()

console.log(SBIPUNE.loan())