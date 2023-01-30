"use strict";
class CustomerA {
    idCreditAllowed() {
        return true;
    }
}
class Suppliera {
    isInShortList() {
        return true;
    }
}
function signContract(partner) {
    let message = '';
    if (partner instanceof Suppliera) {
        if (partner.isInShortList()) {
            message = `sign a contract with supplier`;
        }
    }
    if (partner instanceof CustomerA) {
        if (partner.idCreditAllowed()) {
            message = `sign a contract with customer`;
        }
    }
    return message;
}
console.log(signContract(new Suppliera));
console.log(signContract(new CustomerA));
let family = {
    firstName: "Ajit",
    lastName: "Gode"
};
if ('firstName' in family) {
    console.log('find');
}
