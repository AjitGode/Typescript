
class CustomerA {
    idCreditAllowed():boolean{
        return true
    }
}

class Suppliera {
    isInShortList():boolean{
        return true
    }
}

type BusinessPartnera = CustomerA | Suppliera 

function signContract (partner:BusinessPartnera):string{
    let message:string = '';
    if(partner instanceof Suppliera){
        if(partner.isInShortList()){
            message =`sign a contract with supplier`
        }
    }

    if(partner instanceof CustomerA){
        if(partner.idCreditAllowed()){
            message = `sign a contract with customer`
        }
    }
    return message
}
console.log(signContract(new Suppliera))
console.log(signContract(new CustomerA))

let family = {
    firstName :"Ajit",
    lastName:"Gode"
}
if('firstName'in family){
    console.log('find')
}