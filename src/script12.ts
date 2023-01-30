

interface Shape {
    getArea:()=>number
}

class Rectangle implements Shape {
    public constructor(protected readonly width:number,protected readonly height:number){}
        public getArea(){
            return this.width * this.height
        }
    }

    class Square extends Rectangle {
        public constructor (public width:number){
            super(width,width)
        }
        public getExtendedValues(){
            console.log(this.height)
        }
    }

    // polymorphism (overloading and overriding)

    class PersonM {
        constructor(public firstName:string, public lastName:string){}
        public displayName():string {
            return this.firstName + " "+this.lastName
        }

        
    }

    class PersonCa extends PersonM{
        public override displayName(): string {
            return "Hello"
        }    
    }

    let Va = new PersonCa("Ajit","Gode")

    Va.displayName()

    // abstraction ---we cannot create object for abstract class

    abstract class Human {
        public abstract displayName():string;
        public displayCountryName():string {
            return "India"
        }
    } 

    class PersonL extends Human{
        public displayName(): string {
            return "Ajit Gode"
        }

        public displayCity():string{
            return "Pune"
        }
    }

    let AjitF = new PersonL()
    AjitF.displayCity()
    AjitF.displayCountryName()
    AjitF.displayName()
