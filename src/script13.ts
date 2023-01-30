

interface BusinessPartner {
    name:string,
    credit :number
}

interface Identity {
    id:number,
    name:string
}

interface Contact {
    email:string,
    phone:number
}

type EmployeeA = Identity & Contact
type Customer = BusinessPartner & Contact

let e:EmployeeA = {
    id:10,
    name:"Ajit Gode",
    email:"godeajit71@gmail.com",
    phone:8390889925
}

let c:Customer = {
    name:"Suyog",
    credit:13456,
    email:"godeajit77@gmail.com",
    phone:8390889925
}

type EmployeeB = Identity & Customer & BusinessPartner

let j:EmployeeB = {
    credit:6890,
    id:25,
    name:"Ajit",
    email:"godeajit95@gmail.com",
    phone:8390889925
}

console.log(j)