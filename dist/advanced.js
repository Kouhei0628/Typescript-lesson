"use strict";
var _a, _b, _c;
const engineerBlogger = {
    name: "Jack",
    role: "front-end developer",
    follower: 10000,
};
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = function (x) {
    console.log(x);
    return 1;
};
let unionFunction;
function describeNomadWorkerProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.king = "dog";
    }
    speak() {
        console.log("woof");
    }
    play() {
        console.log("play");
    }
}
class Bird {
    constructor() {
        this.king = "bird";
    }
    speak() {
        console.log("tweet");
    }
    fly() {
        console.log("fly");
    }
}
function havePet(pet) {
    switch (pet.king) {
        case "dog":
            pet.play();
            break;
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
    pet.speak();
}
havePet(new Bird());
const input = document.getElementById("input");
input.value = "hello";
document.getElementById("input").value = "hello";
const designer = {
    name: "Jack",
    role: "web-designer",
};
const dowonloadedData = {
    id: 1,
};
console.log((_b = (_a = dowonloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = dowonloadedData.user) !== null && _c !== void 0 ? _c : "no-user";
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
class AdvancedPerson {
    constructor() {
        this.name = "Petro";
        this.age = 201;
    }
}
class AdvancedHouse {
    constructor() {
        this.name = "Cottage";
        this.age = 20;
    }
}
let target = new AdvancedPerson();
let source = new AdvancedHouse();
target = source;
function advanceFn(...args) {
    return args;
}
advanceFn(1, "wow", true, 1, 1, 1, 1, 1);
const milk = "milk";
let drink = milk;
const array = [1, 2, 3];
const peter = {
    name: "peter",
    age: 28,
};
