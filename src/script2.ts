function addition(x:number,y:number){
    return x +y
}

let q1 = addition(12,3)
console.log(q1)

//program 2

let canDrive:boolean
let age=18

if(age>18){
    canDrive=true
}else{
    canDrive=false
}
console.log(canDrive)


//object 

let studentA = {
    firstName:'Ajit',
    lastName:'Gode'
}

//console.log(studentA)

let studentB:  {
    firstName:string,
    lastName:string,
    age:number
}

studentB ={
    firstName:'Ajit',
    lastName:'Gode',
    age:23

}

console.log(studentB)

//Array

let city:string[]=[];

city.push('pune')
city.push('nashik')
city.push('mumbai')

//console.log(city)
city.forEach((el)=>{
    console.log(el.toUpperCase())
})

let numbers:number[]= [1,2,3,4,5,6,7,8]

numbers.forEach((el)=>{
    console.log(el)
})

// Array of fixed length ===tuple 

let names: [string,string,number]

names = ['Ajit','Gode',23]


enum Roles {
    admin,
    supervisor,
    sr_supervisor,
    manager,
    HR
}

if(Roles.HR){
    console.log('HR')
}