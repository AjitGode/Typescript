
type person = {
    firstName:string,
    lastName:string
}

let Ajit:person ={
    firstName:"Ajit",
    lastName:"Gode"
}

let Sanket:{firstName:string,lastName:string}= {
    firstName:"Sanket",
    lastName:"Modhe"
}


type car = {
    modelNumber:number,
    color:string,
    type:string
}

let Audi:car = {
    modelNumber:2543,
    color:'Red',
    type:'1st class'
}

interface PersonB {
    firstName:string,
    lastName:string
}

let s:PersonB = {
    firstName : "Mayuri",
    lastName:'Gode'
}

//unions 

function printAddress(code:string|number){
    console.log(`My address is ${code}`)
    console.log(code)
}

printAddress(12)
printAddress('12')
let account:"Saving"|"current"
account ="current"

// functions 

function getName():void{
    console.log("Ajit Gode")
}
getName()

function givString(){
    return "Hello"
}
givString()

function canDriveA():boolean{
    return true
}

canDriveA()