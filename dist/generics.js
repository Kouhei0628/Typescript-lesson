"use strict";
function copy(value) {
    return value;
}
console.log(copy({ name: "wilson" }));
function copy2(value) {
    return value;
}
console.log(copy2({ name: "wilson" }));
console.log(copy2("Kolbe"));
function copy3(value, key) {
    value[key];
    return value;
}
console.log(copy3({ name: "sam" }, "name"));
class LightDataBase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDataBase = new LightDataBase();
stringLightDataBase.add("Orange");
stringLightDataBase.add("Banana");
stringLightDataBase.add("Apple");
stringLightDataBase.add("Banana");
stringLightDataBase.add("Apple");
console.log(stringLightDataBase.get());
const tmpDataBase = {
    id: 3,
    data: [65, 78, 87, 90, 100],
};
const tmpDataBase2 = {
    id: 3,
    data: [65, 78, 87, 90, 100],
};
const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        resolve("done");
    }, 3000);
});
fetchData.then((data) => {
    data.toUpperCase();
});
const vegetables = ["carrot", "tomato", "cucumber"];
class CryptoNumber {
    constructor() {
        this.myCryptos = window.crypto
            .getRandomValues(new Uint16Array(4))
            .toString();
        this.myRandoms = this.organizeDigits(this.myCryptos);
    }
    organizeDigits(str) {
        const strArray = str.split(",").map((s) => {
            return ("00000" + s).slice(-5);
        });
        return strArray;
    }
    getCryptoNumber() {
        return this.myRandoms.toString().replace(/,/g, " ");
    }
    displayCryptoNumber() {
        const cn = document.querySelector(".crypto-number");
        cn.textContent = this.getCryptoNumber();
    }
}
const cryptoNumber = new CryptoNumber();
cryptoNumber.displayCryptoNumber();
let temporary;
let tmp3;
let tmp4;
let tmp5;
