"use strict";
// type casting as operator 
//EventTarget <---- Node <---- Element <---- HTMLElement <---- HTMLInputElement
let input = document.querySelector('input[type="text"]');
console.log(input.value);
let input2 = document.querySelector('input[type="text"]');
let b = input2.value;
let e1;
e1 = new HTMLInputElement();
//program 2 
let e2 = document.querySelector('input[type="text"]');
e2.value;
// type assersation 
function getCount(price, discount, format) {
    let finalPrice = (price - discount);
    if (format) {
        return `$${finalPrice}`;
    }
    else {
        return finalPrice;
    }
}
let a11 = getCount(200, 20, true);
let a22 = getCount(100, 10, false);
console.log(a11);
console.log(a22);
