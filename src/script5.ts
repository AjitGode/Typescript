

class PersonC{
    greeting :string;
    constructor(msg:string){
        this.greeting = msg
    }
    greet():string {
        return this.greeting
    }
}

let pro = new PersonC('Hello')
console.log(pro.greeting)
console.log(pro.greet())

//program 2

//private and public method


class PersonD {
    private name:string;
    public constructor(name:string){
        this.name= name;
    }

    public getName():string {
        this.getGreet()
        return this.name
    }
    private getGreet(){
        console.log('Ajit')
    }
}

let Ajitg = new PersonD('Akshay')

let a1 = Ajitg.getName()
console.log(a1)

// program 3 

class PersonE {
    public constructor(private name:string){}
        public getName():string {
            return this.name
        }
    }


let ajit = new PersonE('Ajit')
console.log(ajit.getName())


// program 4 

class PersonF{
    private readonly name:string;
    public constructor(name:string){
        this.name =name;
    }

    public getName():string{
        return this.name
    }
}

let ajit1 = new PersonF("Sanket")
console.log(ajit1.getName())