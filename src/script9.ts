
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
    model :number;
    type:string;
    color:string;

    constructor(model:number,type:string,color:string){
        this.model = model
        this.type = type
        this.color = color
    }

    display(){
        console.log(this.color)
    }
}

let bmw = new Vehicle(123,"Class A","Blue")

bmw.model
bmw.display()


// program 3 

class Vehicle1 {
    constructor(public model:number,public type:string,public color:string){

    }
    display(){
        console.log(this.color)
    }
}

let bmw2 = new Vehicle1(123,"Class B","Black")

console.log(bmw2.color)


// program 4 

class Vehicle3 {
    static country:string = "India"
    static displayCountry():void{
        console.log(Vehicle3.country)
    }
    display(){
        console.log("Ajit Gode")
    }
}

Vehicle3.displayCountry()
console.log(Vehicle3.country)

let Q1 = new Vehicle3()
console.log(Q1)


// private 


class student {
    private fullName:string
    private age:number
    private skill:string[]

    constructor(fn:string,ag:number,sks:string[]){
        this.fullName =fn
        this.age = ag
        this.skill = sks
    }

    getFullName(){
        return this.fullName
    }
    getAge(){
        return this.age
    }
    getSkill(){
        return this.skill
    }
}

let Q2 = new student("Ajit",34,["js"])

Q2.getAge()

// program 6 --- readonly

class Student {
         readonly fullName:string
         readonly age:number
         readonly skill:string[]
         constructor(fn:string,ag:number,sks:string[]){
            this.fullName = fn
            this.age = ag
            this.skill = sks
         }

         setFullName(n:string){
           // this.fullName = n
         }
}