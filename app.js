'use strict'

//EX2
// let number = prompt("Введите целове число в диапазоне 0-999");
// function getUnits(number) {
//     return number % 10
// }
// function getTens(number) {
//     let NumberAfter = number / 10;
//     return Math.floor(NumberAfter);
// }
// function getHundrets(number) {
//     return Math.floor(number / 100);
// }

// let sortNumber = {
//     Units: getUnits(number),
//     Tens: getTens(number),
//     Hundrets: getHundrets(number),
// }

// console.log(sortNumber);

//EX2
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
}

let pr1 = new Product('iphone', 100)
pr1.make25PercentDiscount();
alert(pr1.price);