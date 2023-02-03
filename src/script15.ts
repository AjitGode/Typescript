

// type casting as operator 

//EventTarget <---- Node <---- Element <---- HTMLElement <---- HTMLInputElement

let input = document.querySelector('input[type="text"]') as HTMLInputElement
console.log(input.value)

let input2 = document.querySelector('input[type="text"]') as HTMLInputElement
let b = (input2 as HTMLInputElement).value


let e1: EventTarget;
e1 = new HTMLInputElement()

//program 2 

let e2 = <HTMLInputElement>document.querySelector('input[type="text"]')
e2.value


// type assersation 

function getCount(price: number, discount: number, format: boolean): number | string {
    let finalPrice = (price - discount)

    if (format) {
        return `$${finalPrice}`
    } else {
        return finalPrice
    }


}
let a11 = getCount(200, 20, true) as string
let a22 = getCount(100, 10, false) as number

console.log(a11)
console.log(a22)