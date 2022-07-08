"use strict";
let hasValue = true;
let count = 10;
const float = 3.14;
const negative = -3.14;
let single = "";
let double = "wow";
let backtick = `Hello World`;
let h;
h = "Hello";
const person = {
    name: { first: "Jack", last: "Smith" },
    age: 20,
};
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
const book = ["business", 1500, false];
var CoffeeSize2;
(function (CoffeeSize2) {
    CoffeeSize2["SHORT"] = "SHORT";
    CoffeeSize2["TALL"] = "TALL";
    CoffeeSize2["GRANDE"] = "GRANDE";
    CoffeeSize2["VENTI"] = "VENTI";
})(CoffeeSize2 || (CoffeeSize2 = {}));
const coffee = {
    hot: true,
    size: CoffeeSize2.TALL,
};
coffee.size = CoffeeSize2.SHORT;
let anything = true;
anything = "Hello";
anything = 3.14;
anything = [];
anything = {};
anything.salsa = "cool";
let banana = "banana";
banana = anything;
let unionType = "hello";
unionType.toUpperCase();
unionType = 3.14;
let unionTypes = [1, "hello"];
const apple = "apple";
let clothSize = "S";
const cloth = {
    color: "red",
    size: clothSize,
};
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
function sayHello() {
}
let tmp;
let tmp2 = null;
const anotherAdd = add;
const doubleNumber = (num) => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(2, (doubleNum) => doubleNum);
let unknownInput;
let anyInout;
let text;
unknownInput = "hello";
unknownInput = 3.14;
unknownInput = [];
if (typeof unknownInput === "string") {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error("This is error"));
