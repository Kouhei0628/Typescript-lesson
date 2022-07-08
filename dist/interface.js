"use strict";
let addFunc;
addFunc = (num1, num2) => num1 + num2;
const nameable = {
    name: "Jack",
};
class Developer {
    constructor(age, experience, name) {
        this.age = age;
        this.experience = experience;
        this.name = name;
    }
    greeting(message = "hello") {
        if (message) {
            message.toUpperCase();
        }
        console.log(message);
    }
}
const tmpDeveloper = {
    name: "Sam",
    age: 20,
    experience: 1,
    greeting: (message) => {
        console.log(message);
    },
};
const user = new Developer(20, 1);
