// interface 

interface Greetale{
    name:string
    greet(word:string):void
    display(year:string):void
}

interface year {
    year:string
    display(year:string):void
}


class PersonX implements Greetale,year{
    name: string
    year:string
    

    constructor(name:string,year:string){
        this.name=name
        this.year=year
    }

    greet(word:string):void{
        console.log(`welcome ${word}`)
    }

    display(year: string): void {
        console.log(`welcome ${year}`)
    }
}

let pravin = new PersonX("Ajit","1999")

pravin.greet("Ajit")


type Admin = {
    name:string,
    roles:string[]
}

type Employee = {
    name:string,
    startDate:Date
}

type calEmployee = Admin & Employee
type calEmployee2 = Admin | Employee

let h1:calEmployee = {
    name:"Ajit",
    roles:["admin","customer","operators"],
    startDate:new Date()
}


// program 3 

type language = string | boolean 
type language2 = boolean | number
type language3 = language | language2

let s1:language3 = true


type ch = number| string  

// program 4
// function overloading 

function add(a:number,b:number):number
function add(a:string,b:string):string
function add(a:string,b:number):string
function add(a:number,b:string):string 

// function add(a:any,b:any){
//     return a + b
// }

function add(a:ch,b:ch){
    if(typeof a=='string' && typeof b ==='string'){
        return a + b
    }
    if(typeof a=='number' && typeof b ==='number'){
        return a + b
    }
    if(typeof a=='number' && typeof b ==='string'){
        return a.toString() + b
    }
    if(typeof a=='string' && typeof b ==='number'){
        return a + b.toString()
    }
}

console.log(add(1,5))
console.log(add(1,'5'))
console.log(add('1','5'))
console.log(add('1',5))

